#!/usr/bin/env python

import requests
import sys

to = sys.argv[1]

data = {'From': "+14805265812", 'To': to, "Body": "Test", "StatusCallback": "http://106.187.50.144:9999/twilio"}

auth=("8C748702fc738d6f16455dd418b93a67d1", "5b6293592a8c4a8e6ba2a36ea6ce1ecA")

headers={'Host': 'api.twilio.com', 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': "*/*", 'Method': 'POST'}

url = "https://api.twilio.com/2010-04-01/Accounts/AC748702fc738d6f16455dd418b93a67d1/Messages.json"

resp = requests.post(url, auth=auth, headers=headers, data=data)

print resp.json()
