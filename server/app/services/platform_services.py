from app.twitter_client import TwitterClient
from app.utils.custom_errors import PermissionsDeniedError
from app.utils.error_utils import get_business_requirement_error_response

client = TwitterClient()


def request_token_from_twitter():
    return client.request_token_from_twitter()


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
