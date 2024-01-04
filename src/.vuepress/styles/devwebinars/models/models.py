# -*- coding: utf-8 -*-
import datetime
from odoo import models, fields, api
from odoo.exceptions import ValidationError
import secrets
import logging
import re

_logger = logging.getLogger(__name__)

class student(models.Model):
    _name = 'devwebinars.student'
    _description = 'Alumnos pertenecientes a nuestra academia'

    name = fields.Char(string="Nombre", readonly=False, required=True, help='Nombre del alumno')
    birth_year = fields.Integer()
    dni = fields.Char(string="DNI")
    photo = fields.Image(max_width=200, max_height=200)



    @api.constrains('dni')
    def _check_dni(self):
        regex = re.compile('[0-9]{8}[a-z]\Z', re.I)
        for student in self:
            # Ahora vamos a validar si se cumple la condición
            if not regex.match(student.dni):
                # No coinciden por lo que tenemos que informar e impedir que se guarde
                raise ValidationError('DNI format incorrect')

    _sql_constraints = [('dni_uniq', 'unique(dni)', 'DNI can\'t be repeated')]



class teacher(models.Model):
    _name = 'devwebinars.teacher'
    _description = 'Profesores pertenencientes a nuestra academia'

    name = fields.Char(string="Nombre", readonly=False, required=True, help='Nombre del alumno')
    dni = fields.Char(string="DNI", readonly=False, required=True, help='Identificador del alumno')
    photo = fields.Image(max_width=200, max_height=200)
    technology = fields.Many2many("devwebinars.technology")


class course(models.Model):
    _name = 'devwebinars.course'
    _description = 'Curso que se imparte.'

    name = fields.Char(string="Nombre", readonly=False, required=True, help='Nombre del curso')
    start_date = fields.Date(default=datetime.date.today() + datetime.timedelta(days=1))
    end_date = fields.Date(default=datetime.date.today() + datetime.timedelta(days=1))
    teacher = fields.Many2many("devwebinars.teacher")
    is_presencial = fields.Boolean()
    classroom = fields.Many2one("devwebinars.classroom")
    technology = fields.Many2one("devwebinars.technology")
    students = fields.Many2many("devwebinars.student")


class technology(models.Model):
    _name = 'devwebinars.technology'
    _description = 'Tecnología(s) que se enseña en el curso'

    id = fields.Char()
    name = fields.Char()


class classroom(models.Model):
    _name = 'devwebinars.classroom'
    _description = 'Clase en la que se imparte el curso (presencial)'

    id = fields.Char()
    name = fields.Char()

