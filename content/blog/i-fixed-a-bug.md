---
description: Having some super niche knowledge actually came in handy
---
# I fixed an obscure bug and it felt great
<!-- @unocss-ignore -->
We had reports of users seeing other user’s data. *alarms blare* 🚨 BIG SECURITY ISSUE 🚨

Where could this be happening? We just fixed some other security issues, did we break this? Are we compromised? How long has this been happening? I can’t reproduce it! How do we fix this!!!?!??!

**I fixed it in a few hours, and it felt awesome**

I had recently spent time in our backend systems, specifically our authentication and authorization services, and my gut feeling was this was in our Nuxt code. Sure enough, it was. 

If two users hit the app within the same second or so, they could see the wrong data. This was because a previous dev was saving the user’s cookie to process.env in order to be used in other code later. The problem there is that process.env exists between requests. If another request comes in and the previous one hasn’t finished yet, the request logic would be using the other user’s cookie from process.env. Then once nuxt renders the html and sends it, 2 users see the same page. One sees what they expected, the other user sees someone else’s stuff.