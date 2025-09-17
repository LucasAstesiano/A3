# scrape_deruedas.py
import re, json
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.deruedas.com.ar"
START_URL = "https://www.deruedas.com.ar/bus.asp?codUsr=186541"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def txt(s: str) -> str:
    return re.sub(r"\s+", " ", s or "").strip()

def scrape_list(url: str):
    s = requests.Session()
    s.headers.update(HEADERS)

    r = s.get(url, timeout=30)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")

    autos = []
    # Cada resultado está en <div id="car_XXXXX">
    for car in soup.select('div[id^="car_"]'):
        # IMAGEN
        img_tag = car.select_one(".divCar_1 img[src]")
        imagen = urljoin(BASE_URL, img_tag["src"]) if img_tag else ""

        # LINK + MODELO: el h2 dentro de <a class="titulo ...">
        h2 = car.select_one('a.titulo h2')
        modelo = txt(h2.get_text()) if h2 else ""
        link_a = h2.find_parent("a") if h2 else None
        link = urljoin(BASE_URL, link_a["href"]) if link_a and link_a.has_attr("href") else ""

        # PRECIO + AÑO: están en el <td align="right">
        right_td = car.select_one('td[align="right"]')
        precio = ""
        anio = ""
        if right_td:
            precio_tag = right_td.select_one(".titulo")
            precio = txt(precio_tag.get_text()) if precio_tag else ""
            m = re.search(r"\b(19|20)\d{2}\b", right_td.get_text())
            anio = m.group(0) if m else ""

        autos.append({
            "imagen": imagen,
            "precio": precio,
            "modelo": modelo,
            "anio": anio,
            "link": link
        })
    return autos

if __name__ == "__main__":
    data = scrape_list(START_URL)
    with open("deruedas.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"OK: {len(data)} vehículos guardados en deruedas.json")
