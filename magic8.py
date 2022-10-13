# Imports
import random

# Initial variables
name = "Joe"
question = "Am I alive?"
answer = ""

# TODO: have user type into name and question variables

# Core logic
random_number = random.randint(1, 11)

if random_number == 1:
  answer = "Yes - definitely."
elif random_number == 2:
  answer = "It is decidedly so."
elif random_number == 3:
  answer = "Without a doubt."
elif random_number == 4:
  answer = "Reply hazy, try again."
elif random_number == 5:
  answer = "Ask again later."
elif random_number == 6:
  answer = "Better not tell you now."
elif random_number == 7:
  answer = "My sources say no."
elif random_number == 8:
  answer = "Outlook not so good."
elif random_number == 9:
  answer = "Very doubtful."
elif random_number == 10:
  answer = "Possibly."
elif random_number == 11:
  answer = "Unsure, ask me later!"
else:
  answer = "Error"

# 8-Ball answers
if question == "" and name == "":
  print("Do you want to tear apart reality as we know it!? Ask me a question before shaking!")
elif question == "":
  print(name + ", do you *really* want to tear apart the space-time continuum? Ask me a question before shaking, I like having a reality to live in!")
elif name == "":
  print("Question: " + question)
else:
  print(name + " asks: " + question)
  print("Magic 8-Ball's answer: " + answer)
