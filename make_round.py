from PIL import Image, ImageDraw

def make_round(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a circular mask
    size = min(img.size)
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    
    # Apply the mask
    result = Image.new("RGBA", img.size)
    result.paste(img, (0, 0), mask=mask)
    
    result.save(output_path)
    print(f"Saved round image to {output_path}")

if __name__ == "__main__":
    make_round("public/favicon.png", "public/favicon.png")
