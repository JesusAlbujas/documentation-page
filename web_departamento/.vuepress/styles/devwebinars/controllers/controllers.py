# -*- coding: utf-8 -*-
# from odoo import http


# class Devwebinars(http.Controller):
#     @http.route('/devwebinars/devwebinars/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/devwebinars/devwebinars/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('devwebinars.listing', {
#             'root': '/devwebinars/devwebinars',
#             'objects': http.request.env['devwebinars.devwebinars'].search([]),
#         })

#     @http.route('/devwebinars/devwebinars/objects/<model("devwebinars.devwebinars"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('devwebinars.object', {
#             'object': obj
#         })
