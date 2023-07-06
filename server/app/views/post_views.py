from flask import request
from flask_login import login_required

from app.services import platform_services


# @login_required
def create_post():
    content = request.json.get("content")
    return platform_services.create_tweet(content)
