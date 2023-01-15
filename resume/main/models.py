from resume.extensions import db


class Resumes(db.Model):
    __tablename__ = 'resumes'
    id = db.Column(db.Integer, primary_key=True)
    # user
    # hard skills m2m
    # education
    # experience text field
    # can do now
    # soft skills

class HardSkills(db.Model):
    pass

