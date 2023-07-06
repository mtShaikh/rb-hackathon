import flask
import tweepy
import logging

logger = logging.getLogger("tweepy")
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler()
logger.addHandler(handler)


class TwitterClient:
    oauth2_user_handler = tweepy.OAuth2UserHandler(
        client_id="NlNjeTF4Zm5LRmlGQmJSUXhKeDQ6MTpjaQ",
        redirect_uri="https://fffa-119-152-225-159.ngrok-free.app/dashboard",
        scope=["tweet.write", "tweet.read", "users.read"],
        # Client Secret is only necessary if using a confidential client
        client_secret="xvfIeAv2VNPHS5t3y1Ds9YaDlSgElhLJdSKNUACRamlt1BI7hc"
    )

    auth = tweepy.OAuth2BearerHandler(
        "AAAAAAAAAAAAAAAAAAAAAHyUogEAAAAAYZzD%2BUAYa6zk9ea%2BvnId6X77QP8%3DUzsDmUXafCQNAsyfUG8kDl4jBTAkStXHIVknKYPEeiKVmMiC80")
    api = tweepy.API(auth)

    client = None

    def request_token_from_twitter(self):
        auth_url = self.oauth2_user_handler.get_authorization_url()
        flask.session["code_verifier"] = self.oauth2_user_handler._client.code_verifier
        return auth_url

    def get_access_token(self, url):
        self.oauth2_user_handler._client.code_verifier = flask.session["code_verifier"]
        response = self.oauth2_user_handler.fetch_token(
            url
        )
        try:
            access_token = response.get("access_token")
            if access_token:
                self.client = tweepy.Client(access_token)
            else:
                return None
            return access_token
        except tweepy.TweepyException as e:
            print(e)
            return None

    def create_tweet(self, content, access_token, media_ids=None):
        if not self.client:
            self.client = tweepy.Client(access_token)
        try:
            # handle errors
            response = self.client.create_tweet(text=content, media_ids=media_ids, user_auth=False)
            return response
        except tweepy.TweepyException as e:
            print(e)
            return None

    def upload_media(self, filename, file):
        if not self.api:
            return None
        try:
            # handle errors
            response = self.api.media_upload(filename=filename, file=file)
            return response
        except tweepy.TweepyException as e:
            print(e)
            return None
