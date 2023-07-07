from app.twitter_client import TwitterClient
from app.utils.custom_errors import PermissionsDeniedError
from app.utils.error_utils import get_business_requirement_error_response
import jwt
from app.models import User


SECRET_KEY="SocialScribe123CLD"


client = TwitterClient()


def request_token_from_twitter():
    return client.request_token_from_twitter()

def generate_user_token(user):
    user_dict = dict(
        user_id=user.user_id,
        username=user.username,
        email=user.email,
        password_hash=user.password_hash,
        confirmed=user.confirmed,
        account_id=user.account_id,
        roles=user.roles
    )
    token = jwt.encode(payload=user_dict,
               key=SECRET_KEY,
               algorithm="HS256")

    return token


def authorize_token(token):
    decoded_data = jwt.decode(jwt=token,
                              key=SECRET_KEY,
                              algorithms=["HS256"])

    user = User()

    user.user_id = decoded_data.get("user_id")
    user.username = decoded_data.get("username")
    user.email = decoded_data.get("email")
    user.password_hash = decoded_data.get("password_hash")
    user.confirmed = decoded_data.get("confirmed")
    user.created_at = decoded_data.get("created_at")
    user.account_id = decoded_data.get("account_id")
    user.account = decoded_data.get("account")
    user.roles = decoded_data.get("roles")

    return user
def get_access_token(url):
    token = client.get_access_token(url)
    if not token:
        return get_business_requirement_error_response(
            PermissionsDeniedError, 403
        )

    # todo: save the text in db
    return {"message": "success", "token": token}, 200


def create_tweet(content):
    # todo: fetch token from db
    response = client.create_tweet(content,
                                   "S29fZjlhZmhqRWFhZ1F1bDRHdXJTa1lyMU1WeDZON3B6a051eHNSTEs1bjEyOjE2ODg2NzYyMTQ3Nzk6MToxOmF0OjE")
    if not response:
        return get_business_requirement_error_response(
            PermissionsDeniedError, 403
        )
    # todo: save the text in db
    text = response['text']
    return {"text": text}, 200


def upload_media():
    pass
