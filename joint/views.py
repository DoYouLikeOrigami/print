# -*- coding: utf-8 -*-

from flask import render_template, request, redirect, url_for

from joint import joint

@joint.route('/')
@joint.route('/index')
def index():
    return render_template('article.html')

@joint.route('/goods')
def goods():
    return render_template('basicgoods.html')

@joint.route('/basket')
def basket():
    return render_template('basket.html')

@joint.route('/delivery')
def delivery():
    return render_template('delivery.html')

@joint.route('/illustrations')
def illustrations():
    return render_template('illustrations.html')

@joint.route('/textile')
def textile():
    return render_template('textile.html')

@joint.route('/tshirt')
def tshirt():
    return render_template('tshirt.html')

@joint.route('/del_one')
def del_one():
    return render_template('del_one.html')
