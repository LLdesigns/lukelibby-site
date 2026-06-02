"""
Generate a one-page resume PDF for Luke Libby.
Run: python scripts/generate_resume_pdf.py
Output: public/resume.pdf
"""

from pathlib import Path

from fpdf import FPDF

OUT = Path(__file__).resolve().parent.parent / "public" / "resume.pdf"
MARGIN = 12
W = 210 - 2 * MARGIN


class OnePageResume(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=False)
        self.set_margins(MARGIN, MARGIN, MARGIN)

    def section(self, label: str):
        self.ln(1.2)
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(70, 65, 55)
        self.cell(W, 4.5, label.upper())
        self.ln(5)
        self.set_draw_color(120, 134, 90)
        y = self.get_y()
        self.line(MARGIN, y, MARGIN + W, y)
        self.ln(2)

    def para(self, text: str, size: int = 7.8):
        self.set_x(MARGIN)
        self.set_font("Helvetica", "", size)
        self.set_text_color(20, 18, 16)
        self.multi_cell(W, 3.4, text)

    def bullet(self, text: str):
        self.set_x(MARGIN)
        self.set_font("Helvetica", "", 7.8)
        self.set_text_color(20, 18, 16)
        self.multi_cell(W, 3.4, "- " + text)

    def role_line(self, title: str, org: str, dates: str):
        self.set_x(MARGIN)
        self.set_font("Helvetica", "B", 8.2)
        self.set_text_color(20, 18, 16)
        self.multi_cell(W, 3.5, title)
        self.set_font("Helvetica", "I", 7.2)
        self.set_text_color(95, 90, 80)
        self.multi_cell(W, 3.2, f"{org}  |  {dates}")


def build():
    pdf = OnePageResume()
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 17)
    pdf.set_text_color(17, 17, 15)
    pdf.cell(W, 7, "LUKE LIBBY")
    pdf.ln(7)

    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(50, 48, 42)
    pdf.cell(W, 4.2, "Creative Technologist  |  Product Builder")
    pdf.ln(4.2)

    pdf.set_font("Helvetica", "", 7.2)
    pdf.set_text_color(95, 90, 80)
    pdf.cell(
        W,
        3.8,
        "Farmington, UT  |  linkedin.com/in/luke-libby1  |  Portfolio on request",
    )
    pdf.ln(4.5)

    pdf.section("Professional Summary")
    pdf.para(
        "Creative technologist with 10+ years at Pluralsight and freelance product work. "
        "Builds AI-driven internal tooling, video production systems, and hands-on learning "
        "content. Entrepreneur mindset and outdoor enthusiast focused on products that help "
        "people push forward with confidence."
    )

    pdf.section("Core Skills")
    pdf.para(
        "AI/automation: ML, LLM workflows, MCPs, preflight QC, lab generation  |  "
        "Product: strategy, UX/UI, prototyping, design systems  |  "
        "Software: React, FlutterFlow, Python, FastAPI, Supabase, Webflow, Figma  |  "
        "Media: Premiere, Audition, video pipelines, motion graphics, author coaching"
    )

    pdf.section("Experience")
    pdf.role_line(
        "Creative Technologist",
        "Pluralsight",
        "Jan 2026 - Present, Remote",
    )
    for item in [
        "Internal video tools; AI workflows and MCPs for review, QC, delivery",
        "Automated preflight for audio, video, and export standards",
        "Optimize video pipelines with automation and intelligent systems",
    ]:
        pdf.bullet(item)

    pdf.ln(0.5)
    pdf.role_line(
        "Technical Content Producer",
        "Pluralsight",
        "Sep 2021 - Jan 2026",
    )
    pdf.bullet(
        "Designed AI-driven lab generation; authored 60+ hands-on labs; led author workflow and review"
    )

    pdf.ln(0.5)
    pdf.role_line("Earlier Pluralsight Roles", "Pluralsight / Digital-Tutors", "2014 - 2021")
    pdf.para(
        "Video Content Producer, Production Editor, and QA Specialist - author coaching, "
        "Adobe suite editing, motion graphics, publication workflows. AV Editor at Digital-Tutors.",
        size=7.2,
    )

    pdf.ln(0.5)
    pdf.role_line("Freelance Designer", "Luke Libby Design", "2017 - Present")
    pdf.para(
        "UI/UX, FlutterFlow, Flutter, Webflow, Supabase, Firebase - web and mobile product design.",
        size=7.2,
    )

    pdf.section("Selected Projects")
    pdf.bullet("Nutriant - AI kitchen/compliance platform (Founder)")
    pdf.bullet("GearTraxx - outdoor gear tracking and maintenance (Founder)")

    pdf.section("Education")
    pdf.para(
        "Oklahoma Christian University - BA Animation & Game Design, 3.6, Dean's Award  |  "
        "Northern Oklahoma College - AAS, 3.8, Dean's Award  |  "
        "Tri County Technology Center - CAD/CADD, 3.9",
        size=7.2,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT} ({pdf.page_no()} page(s))")


if __name__ == "__main__":
    build()
