---
title: "Redesigning My College's Covid Testing Process"
description: "This description will be used for the article listing and search results on Google."
date: "2021-05-28"
banner:
    src: "../../images/covidtestreminder.png"
    alt: "The email I get when it's time for me to test again"
    caption: "Not again..."
categories:
    - 'Portfolio'
keywords:

---
## TL:DR
*I redesigned my college's Covid-19 testing process to increase the percentage of students who make testing appointments. I discovered that many didn't make appointments and walked in without one instead. This was stressful for the medical staff who administered the tests since they rely on appointments to schedule staff. Since many students don’t make appointments, they frequently end up understaffed and overburdened. By making the process less frustrating, I hope to increase student appointment rates.*

<br>


The top image depicts the email I get when my school decides it’s time for me to get another Covid test. Every week, a third of the student body (~750 people) is required to get tested. 

Even though I think testing is the right thing to do, I dread seeing this email. Why? Because in order to get tested, I have to go through an online tool to book an appointment and it's *very* frustrating to use. It takes way longer and requires more brainpower than it should to complete. If I’m going to get tested repeatedly every month, I want that process to be as efficient as possible.

But the process still works: I can sign up for a Covid test and get my results within a week. So why redesign it?

## Why Redesign?

My initial inspiration was totally selfish. I didn’t want to waste any more of my time signing up for Covid tests. While designing to not waste people’s time is a worthwhile pursuit, I discovered a more meaningful reason while doing research for this project. **Students not creating appointments causes undue stress on the already-stressed medical staff at CC.** 

I learned about this problem after talking to the manager at the health center where all our testing is done. She uses the number of appointments on a given day to schedule staff. If most of the students don’t make appointments (which is currently the case), she can’t predict how many staff she’ll need to handle student demand. Frequently, they end up over- or worse, understaffed, which is very stressful. A few days before we talked, she told me they had 100 appointments booked so she scheduled only a few people to work. However, when the day arrived, over 400 students walked in looking for a test and the few staff on duty had to frantically scramble to get the tests and the corresponding paperwork done.

While getting a Covid test is never going to be an amazing experience, it should at least be as stress-free as possible for the medical staff administering the tests. In order for that to happen, more students need to make appointments. 

## How might we encourage more students to make appointments?

My first step was to learn what the biggest pain points were. They reveal what’s essential to change if we want more students to make appointments.

Conveniently, I was a user so I had some good first guesses as to what the main problems were. The patient form was tedious and many steps in the process weren't clear enough. To learn what parts of the process were most painful for everyone, not just myself, I talked to 12 other students about their experiences. 

One of my biggest discoveries was that people skip the appointment-making process altogether! Before this project, I didn't realize this was even an option. According to all instructions from the health center, you are supposed to make an appointment before coming in. However, most of the students I talked to either never or infrequently made appointments. The process was so painful they skipped it in the face of signs telling them not to! As I learned from the health center staff, this wasn’t a good outcome since it frequently left them understaffed and stressed out.

To better understand the experiences of students at each step, I created a journey map based on what everyone told me. Using it helped me identify where the biggest problems were and thus, where I should focus my attention in my design.
Journey map of a student's experience with the Covid testing process, start to finish
"Journey map of a student's experience with the Covid testing process, start to finish")

![Journey map of students' experiences with the Covid testing process](/content/images/benhamster.jpg "Journey map of students' experiences with the Covid testing process")
![alt text for screen readers](/path/to/image.png "Text to show on mouseover").
From the journey map, I identified 5 major areas that needed redesigning if we want more students to make appointments:

1. Email reminder and testing instructions
2. Reason for visit
3. Patient form
4. Appointment confirmation
5. Date and time

I started by ideating solutions with paper prototypes so I could quickly test ideas. Once I felt like my design sufficiently resolved the pain points, I created higher fidelity Figma mockups.

![Paper prototypes](../../images/paper-prototypes.png "Paper prototypes")

### 1. Email reminder and testing instructions

![Email reminder and testing instructions redesign](../../images/email.png "Email reminder and testing instructions redesign")

##### Problem

It takes too long to get what you need from the email reminder. Almost all of the students seeing it will have already gotten tested and know how the process works. All they want to do when they see this reminder is make an appointment. In order to make an appointment, they need the link to the online appointment portal. Currently, the link is buried in an attached document. 

##### Solution

First, I put the contents of the document in the email itself so students wouldn’t have to download an email attachment just to get one link. Then, I moved the link to the top of the email so it’s one of the first things a student sees. 

 I also reorganized and reformatted the text from the email attachment. There’s a lot of important information in there that’s hidden in a ‘wall of text’ that I, and likely most students, didn’t read ([F-shaped pattern of reading](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)). To make it more scannable, I split the information into sections with headers and re-stylized the text so that only the most important things got special styling. If everything is bold, nothing is bold. With these changes, it’s a lot easier to quickly find the information you need.

### 2. Reason for visit

![Initial reason for visit page redesign](../../images/reason-for-visit.png "Initial reason for visit page redesign")

##### Problem

Splitting Covid-19 testing up by AM / PM doesn’t let people easily change their minds. I was making an appointment once where I selected an AM test and halfway through, I realized the time I picked didn’t work for me. Unfortunately, to push my appointment back to the afternoon, I had to pick the “Covid-19 Testing PM” option which meant losing all my progress on the form. That sucked.

##### Solution

I combined AM and PM into one option: Covid-19 testing. Then, students can pick from both AM and PM times and change their minds without having to backtrack.

### 3. Patient form

![Patient form redesign](../../images/new-or-existing-patient.png "Patient form redesign")

##### **Problem**

This is the biggest pain point for students. If anything is fixed, it should be this. Currently, you need to fill out all of your insurance and contact details *every time* you make an appointment, even if you've already filled them out before. It's extremely frustrating and it's the main reason why students don't like making appointments. The health center already has everyone’s information from the first time they signed up so why do they make them fill it out again and again? Like many students, I don’t keep my insurance card on hand at all times so retrieving it each time is painful. The final straw? The form asks you if you are a new or existing patient. What a sick slap of irony! If I’m an existing patient, don’t make me fill out all this information again!

##### **Solution**

To alleviate this frustration, I split the form into two versions for new and existing patients.

New patients fill out the complete form so the health center gets all the necessary information from them while existing patients only have to give their name and date of birth to confirm their appointment. Since almost all students are now existing patients, the process will be much faster for most of the student body. All it takes now is a little typing, click, and appointment scheduled!

I also grouped the new patient fields into sections (Personal, Contact, and Insurance) to reduce the cognitive load associated with filling out the form. That way, you can complete one information zone at a time instead of bouncing back and forth between them like you have to in the current version. The students that I showed my redesign to noted how much more approachable my design was compared to the original. It’s probably impossible to make filling out a form a wonderful experience, but small steps like grouping related items together and making the text more legible can go far in making it bearable. 

### 4. Appointment confirmation

![Appointment confirmation page redesign](../../images/confirmation-page.png "Appointment confirmation page redesign")

##### **Problem**

I saw many students show up to the health center at a different time or even another day than what they had picked for their appointment. I talked to a couple of students after their test to understand why. They both told me some form of “I just thought you needed an appointment and then you could walk in whenever.” While it’s good these students are making appointments, them not showing up on time reduces how worthwhile the appointments are. Remember, the medical staff use appointments to gauge testing demand so they can staff accordingly. If students don’t show up on the same day as their appointment, should they have even made an appointment at all?

##### Solution

To encourage more students to show up on time, I put more emphasis on the date and time throughout the appointment-making process. Right now, the date and time don’t stand out as particularly important since they are styled the same as all the other text so I made them bigger, colorful, and at the top of the page. 

Additionally, I wanted the confirmation page to feel more like you had officially made an appointment. You made a commitment and you have to show up on time. A big title announcing that their appointment has been booked and a direct  “See you…” then will hopefully inspire that feeling.

### 5. Date and time

![Date and time redesign](../../images/date-and-time.png "Date and time redesign")

##### Problem

Improving this fell into the “general usability” bucket. When I think about dates, I always need to see a calendar. I can’t visualize time without seeing the days mapped out in a grid. Additionally, the time picker was uncomfortably precise. In a perfect world where everybody arrived on time, 1-minute intervals for appointments would work great. It would so efficient! However, we don’t live in a perfect world. As a user, I also don’t want the option to pick between 3:02 and 3:03 pm. It’s an unnecessary decision. 

##### Solution

A calendar drop-down and 15-minute time intervals where a certain number of students can sign up for each interval. 

## Prototypes

The full prototype can be explored below:

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbVKqu7Dlkk091eB4S1ikrq%2FAppointment-Tool-Redesign%3Fpage-id%3D0%253A1%26node-id%3D4%253A30%26viewport%3D241%252C48%252C0.05%26scaling%3Dscale-down-width%26starting-point-node-id%3D4%253A30" allowfullscreen></iframe>

### Mobile

![Mobile](/../../images/mobile.png)

I frequently schedule appointments on my phone and so do many of the students I talked to. Thus, making a mobile-friendly version was a priority. I personally found the current form’s mobile formatting to be too small and difficult to navigate so I increased the spacing between form fields to fix this. 

You can view the mobile prototype below.

<iframe style = "border: 1px solid rgba(0, 0, 0, 0.1); width:100%; height:700px; margin-left:auto; margin-right:auto;" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbVKqu7Dlkk091eB4S1ikrq%2FAppointment-Tool-Redesign%3Fpage-id%3D77%253A476%26node-id%3D124%253A2863%26viewport%3D241%252C48%252C0.24%26scaling%3Dscale-down%26starting-point-node-id%3D124%253A2863" allowfullscreen></iframe>

## Intended Outcomes

The main goal of my redesign is to encourage a greater percentage of students to make appointments. Here’s what I hope will happen as a result:

1. #### Less stress for medical staff

   They will be able to make more informed staffing decisions so health center workers aren’t left understaffed and stressed.  
2. #### Reduced wait times

   Since all CC students operate on the same daily schedule ([the Block plan](https://www.coloradocollege.edu/basics/blockplan/whats-a-block.html)), bottlenecks are frequent across campus. A lot of students walk in right after lunch and before breaks (fall break, weekends, [block breaks](https://www.coloradocollege.edu/basics/blockplan/blockbreak/index.html)). Thankfully, I’ve never seen a concerningly long line at the health center (max I’ve seen is ~8), but more appointments could mean almost no waiting ever since appointments would spread out the testing. Not to mention that lots of people bunched together in a line isn’t something you want during a pandemic.
3. #### Students *might* get tested more

   More testing is good and if the process is easier, more people might get tested voluntarily and not just when the school requires them to. *However*, none of the students I talked to told me they didn’t get tested because the appointment process was too annoying. If my design was implemented, I would want to compare the testing rates before and after to see if it had any effect.

## What I'd Do Differently Next Time

Overall, I was happy with the work I did and what I learned along the way. My last major project took place at a start-up where I had to move fast. There's a lot of benefit to creating value quickly; however, I enjoyed being able to take things more slowly and learn how to more effectively use design thinking strategies. For example, I had never made a journey map before and I learned just how helpful they are for putting the whole process into view. I was able to make better decisions since I was aware of what happened before and after students entered the appointment process.

Unfortunately, right as I finished the prototypes and was about to get feedback from the health center, my school announced it was changing the testing process. Now, every student will pick up at-home testing kits and test themselves while being supervised by a telehealth doctor. If a student tests positive with an at-home kit, then they get sent to the health center for additional molecular testing. 

I reached out to the school to ask why they changed the process. They told me it was for the "flexibility and convenience" of students. After a few months, I'd agree; it is more convenient. I can pick up a couple of tests on my way back from class and test whenever I want. More importantly, they've made our health center staff's lives a lot easier. Instead of bearing the full brunt of testing ~800 students every week, they only do follow-ups on a small number of positive tests. Although, without knowing everything about why the decision was made, part of me still wonders if this issue couldn't have been solved with a simple redesign like mine.
