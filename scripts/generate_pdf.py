# Génère les PDFs à partir des .md ou .json

import os
import markdown
import weasyprint
import yaml

# 📁 Chemin racine de tous les ouvrages
OUVRAGES_DIR = "/ouvrages/al_bourda/"  # ou "ouvrages" si le script est lancé depuis la racine

def generate_pdf_from_md(path_to_md, output_path):
    # Lire le fichier Markdown
    with open(path_to_md, 'r', encoding='utf-8') as f:
        md_content = f.read()

    # Convertir en HTML
    html = markdown.markdown(md_content, extensions=['extra'])

    # Enveloppe HTML minimale
    full_html = f"""
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="utf-8">
        <style>
            body {{
                font-family: 'Amiri', serif;
                margin: 40px;
                line-height: 2;
                direction: rtl;
                text-align: right;
                font-size: 20px;
            }}
            h1, h2, h3 {{
                text-align: center;
                margin-bottom: 0.5em;
            }}
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">
    </head>
    <body>
        {html}
    </body>
    </html>
    """

    # Créer le PDF avec WeasyPrint
    weasyprint.HTML(string=full_html).write_pdf(output_path)
    print(f"✅ PDF généré : {output_path}")

def process_all_books():
    for dossier in os.listdir(OUVRAGES_DIR):
        book_path = os.path.join(OUVRAGES_DIR, dossier)
        if os.path.isdir(book_path):
            md_path = os.path.join(book_path, 'al_bourda.md')
            output_pdf = os.path.join(book_path, 'arabe.pdf')

            if os.path.exists(md_path):
                generate_pdf_from_md(md_path, output_pdf)
            else:
                print(f"⛔ Aucun fichier livre.md dans {book_path}")

import pypandoc
import os

def generate_with_pandoc(input_file, output_file):
    pypandoc.convert_file(input_file, 'pdf', outputfile=output_file)
    print(f"✅ PDF généré : {output_file}")

generate_with_pandoc("/ouvrages/al_bourda/livre.md", "/ouvrages/al_bourda/arabe.pdf")

# if __name__ == "__main__":
#     process_all_books()
