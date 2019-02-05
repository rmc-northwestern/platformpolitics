import requests
import inspect

print(inspect.getfile(requests))
# print(dir(requests.__file__))

def send_simple_message():
	return requests.post("https://api.mailgun.net/v3/sandbox44283119bb104212af61386ef7005a70.mailgun.org",
		auth=("api", "f50e8635068b61592e5ceff3aaa3ec5e-c8c889c9-d0f063cc"),
		data={"from": "Excited User <mailgun@predictivepolitics.org>",
			"to": ["sebastiandobon2@gmail.com"],
			"subject": "Your model is ready on Predictive Politics!",
			"text": "skoobiddy do wop do wah!"})
print(send_simple_message)
