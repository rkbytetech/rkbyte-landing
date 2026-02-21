from PIL import Image, ImageDraw, ImageFont
import os

# Ensure folders exist
os.makedirs("public/products", exist_ok=True)

def create_placeholder(path, text):
    img = Image.new("RGB", (800, 500), color=(240, 240, 245))
    d = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except:
        font = ImageFont.load_default()

    # ✅ NEW: use textbbox instead of textsize
    bbox = d.textbbox((0, 0), text, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]

    d.text(((800 - w) / 2, (500 - h) / 2), text, fill=(34, 34, 34), font=font)
    img.save(path)
    print(f"Created: {path}")

# Hero images
create_placeholder("public/hero-automation.png", "Automation Illustration")
create_placeholder("public/hero-biotech.png", "Biotech")
create_placeholder("public/hero-agri.png", "Agriculture")
create_placeholder("public/hero-industrial.png", "Industrial")
create_placeholder("public/hero-home.png", "Home Automation")

# Products
create_placeholder("public/products/dims.png", "DIMS")
create_placeholder("public/products/photobioreactor.png", "Photobioreactor")
create_placeholder("public/products/irrigation.png", "Smart Irrigation")
create_placeholder("public/products/greenhouse.png", "Greenhouse Monitor")
create_placeholder("public/products/energy.png", "Energy Monitor")
create_placeholder("public/products/predictive.png", "Predictive Maintenance")
create_placeholder("public/products/lighting.png", "Smart Lighting")
create_placeholder("public/products/hvac.png", "Smart HVAC")
