\# Forge2gether Essay Contest — Phase 1 Product Spec

\#\# 1\. Product Goal

Build a lightweight contest operations system for the Forge2gether Essay Contest using:

\- Google Forms for data intake  
\- Google Sheets as the operational database  
\- Google Apps Script for automation  
\- A lightweight branded web app for the public-facing experience  
\- Optional Google Drive for generated certificates and finalist audio uploads

This is designed for fewer than 500 students in Year 1\.

The system should prioritize:  
1\. Fast launch  
2\. Low operational complexity  
3\. Clean student experience  
4\. Reliable consent capture  
5\. Training completion tracking  
6\. Certificate generation  
7\. Blind essay judging  
8\. Finalist verification workflow  
9\. Easy migration to a more robust app later

\---

\#\# 2\. Contest User Flow

\#\#\# Public Landing Page

Student visits:

\`forge2gether.org/contest\`

The page explains:  
\- Contest purpose  
\- Eligibility  
\- Prize amounts  
\- Process  
\- Timeline  
\- Training requirement  
\- Essay prompt  
\- Audio verification requirement for finalists  
\- Parent/guardian consent requirement  
\- Rules and privacy links

Primary CTA:

\`Start the Training / Sign Up\`

This links to Google Form 1\.

\---

\#\# 3\. System Flow

\#\#\# Step 1: Signup Form

Tool: Google Forms

Form name:

\`Forge2gether Essay Contest Signup\`

Purpose:  
Capture student and parent information before training.

Fields:  
\- Student first name  
\- Student last name  
\- Student email  
\- Age  
\- Grade  
\- School name  
\- City  
\- State  
\- Parent/guardian name  
\- Parent/guardian email  
\- Parent/guardian phone  
\- Consent to receive contest communications  
\- Acknowledgment that training is required before essay submission

On submit:  
\- Create Participant ID  
\- Store in Master Sheet  
\- Send confirmation email  
\- Send training link

Participant ID format:

\`F2G-2026-0001\`

\---

\#\#\# Step 2: Training Form

Tool: Google Forms

Form name:

\`Forge2gether Conversation Training\`

Purpose:  
Deliver the short course and confirm completion.

Training should include:  
\- Pre-assessment  
\- Module 1: mindset before conversation  
\- Module 2: communication style  
\- Module 3: disagreement and empathy  
\- Question bank  
\- Post-assessment  
\- Completion confirmation

The current training modules include mindset, “thermostat” emotional regulation, “giraffe vs. jackal” communication, empathy without endorsement, and question-bank guidance for real interviews. These map well to short Google Form sections. :contentReference\[oaicite:1\]{index=1}

On submit:  
\- Mark training complete in Master Sheet  
\- Generate certificate  
\- Email certificate to student and parent  
\- Send official essay entry form link

Certificate name:

\`Forge2gether Conversation Training Certificate\`

Certificate should include:  
\- Student name  
\- Completion date  
\- Participant ID  
\- Forge2gether branding  
\- “Completed the Forge2gether Conversation Training”

\---

\#\#\# Step 3: Essay Entry Form

Tool: Google Forms

Form name:

\`Forge2gether Official Essay Contest Entry Form\`

Purpose:  
Collect official entry, essay, and legal consent.

Use existing structure:  
\- Student information  
\- Parent/guardian information  
\- Interview summaries  
\- Legal agreements  
\- AI/originality certification  
\- Audio verification acknowledgment  
\- Essay text submission

The current entry form already includes the official prompt, required parent/guardian consent, data privacy/email consent, AI policy, publication license, and finalist audio verification acknowledgment. :contentReference\[oaicite:2\]{index=2}

Important Phase 1 decision:  
Use a long-answer essay text field, not file upload.

Reason:  
\- Easier blind judging  
\- Easier word count validation  
\- Easier spreadsheet export  
\- Less Drive clutter  
\- Fewer permissions issues  
\- Lower risk of names appearing in filenames

Essay fields:  
\- Essay title  
\- Word count  
\- Essay text  
\- Name/relationship of interviewee  
\- One-sentence difference explored  
\- One-sentence summary of what shifted/deepened/clarified

On submit:  
\- Confirm training completion  
\- Create Blind Entry ID  
\- Copy anonymized data to Blind Judging Sheet  
\- Flag word count \> 1,000  
\- Send entry confirmation email

Blind Entry ID format:

\`BE-2026-0001\`

\---

\#\#\# Step 4: Blind Judging

Tool:  
\- Google Sheets  
\- Optional Google Form for judges

Judges should never see:  
\- Student name  
\- Student email  
\- Parent info  
\- School name  
\- Participant ID

Judges should see:  
\- Blind Entry ID  
\- Essay title  
\- Essay text  
\- Word count  
\- Interview summary fields

Scoring rubric:  
\- Conversation quality / depth: 25  
\- Reflection and learning: 30  
\- Originality / authenticity: 20  
\- Writing clarity: 15  
\- Fit with contest purpose: 10

Total: 100

Judging workflow:  
1\. Admin screens entries for eligibility.  
2\. Eligible entries appear in Blind Judging Packet.  
3\. Each entry receives at least 2 judge scores.  
4\. Top entries receive third review.  
5\. Admin selects Top 10 or Top 20 finalists.  
6\. Finalists are de-anonymized only after selection.

\---

\#\#\# Step 5: Finalist Verification

Tool:  
\- Email automation  
\- Google Form or Drive upload folder

Form name:

\`Forge2gether Finalist Verification Form\`

Purpose:  
Collect audio and interviewee consent only from finalists.

Fields:  
\- Participant ID  
\- Student name  
\- Parent email  
\- Audio recording upload link or file upload  
\- Interviewee consent checkbox/upload  
\- Confirmation that audio is unedited  
\- Confirmation that interview took place before essay submission

On finalist selection:  
\- Email student and parent  
\- Request audio recording  
\- Request interviewee consent  
\- Give 9-day deadline

The existing entry form already warns that finalists must submit an unedited audio recording and signed interviewee consent within 9 days. :contentReference\[oaicite:3\]{index=3}

\---

\#\# 4\. Google Sheets Architecture

Create one Google Sheets workbook:

\`Forge2gether Contest Operations 2026\`

Tabs:

\#\#\# 4.1 Participants

One row per student.

Columns:  
\- participant\_id  
\- signup\_timestamp  
\- student\_first\_name  
\- student\_last\_name  
\- student\_email  
\- age  
\- grade  
\- school\_name  
\- city  
\- state  
\- parent\_name  
\- parent\_email  
\- parent\_phone  
\- training\_complete  
\- training\_completed\_at  
\- certificate\_sent  
\- certificate\_url  
\- essay\_submitted  
\- essay\_submitted\_at  
\- finalist\_status  
\- winner\_status  
\- notes

\---

\#\#\# 4.2 Training Responses

Raw Google Form output plus computed fields.

Columns:  
\- participant\_id  
\- timestamp  
\- student\_email  
\- pre\_assessment\_score\_1  
\- pre\_assessment\_score\_2  
\- pre\_assessment\_score\_3  
\- quiz\_score  
\- post\_assessment\_score\_1  
\- post\_assessment\_score\_2  
\- post\_assessment\_score\_3  
\- completion\_status  
\- certificate\_generated  
\- certificate\_sent\_at

\---

\#\#\# 4.3 Entries

Raw essay submissions.

Columns:  
\- participant\_id  
\- blind\_entry\_id  
\- timestamp  
\- student\_name  
\- student\_email  
\- parent\_email  
\- essay\_title  
\- declared\_word\_count  
\- computed\_word\_count  
\- essay\_text  
\- interviewee\_relationship  
\- difference\_explored  
\- what\_shifted  
\- consent\_privacy  
\- consent\_rules  
\- consent\_originality\_ai  
\- consent\_publication\_license  
\- consent\_audio\_verification  
\- eligibility\_status  
\- admin\_notes

\---

\#\#\# 4.4 Blind Judging Packet

Anonymized judging data.

Columns:  
\- blind\_entry\_id  
\- essay\_title  
\- computed\_word\_count  
\- essay\_text  
\- interviewee\_relationship  
\- difference\_explored  
\- what\_shifted  
\- eligibility\_status  
\- assigned\_judge\_1  
\- assigned\_judge\_2  
\- assigned\_judge\_3  
\- judging\_status

Do not include:  
\- participant\_id  
\- student name  
\- student email  
\- parent email  
\- school

\---

\#\#\# 4.5 Judging Scores

One row per judge per essay.

Columns:  
\- blind\_entry\_id  
\- judge\_email  
\- judge\_name  
\- score\_conversation\_depth  
\- score\_reflection\_learning  
\- score\_originality\_authenticity  
\- score\_writing\_clarity  
\- score\_fit\_with\_purpose  
\- total\_score  
\- judge\_comments  
\- submitted\_at

\---

\#\#\# 4.6 Score Summary

One row per essay.

Columns:  
\- blind\_entry\_id  
\- judge\_count  
\- average\_score  
\- median\_score  
\- score\_std\_dev  
\- conversation\_depth\_avg  
\- reflection\_learning\_avg  
\- originality\_authenticity\_avg  
\- writing\_clarity\_avg  
\- fit\_with\_purpose\_avg  
\- finalist\_recommendation  
\- admin\_decision

\---

\#\#\# 4.7 Finalists

Columns:  
\- blind\_entry\_id  
\- participant\_id  
\- student\_name  
\- student\_email  
\- parent\_email  
\- finalist\_notification\_sent  
\- finalist\_notification\_sent\_at  
\- audio\_requested  
\- audio\_due\_date  
\- audio\_received  
\- audio\_url  
\- interviewee\_consent\_received  
\- verified  
\- disqualified  
\- disqualification\_reason  
\- final\_rank  
\- prize\_awarded

\---

\#\#\# 4.8 Email Log

Columns:  
\- timestamp  
\- participant\_id  
\- blind\_entry\_id  
\- recipient  
\- email\_type  
\- subject  
\- status  
\- error\_message

\---

\#\# 5\. Apps Script Automations

Create Apps Script project attached to the operations Sheet.

Script modules:

\#\#\# \`config.gs\`

Stores:  
\- Sheet names  
\- Form IDs  
\- Email templates  
\- Admin email  
\- Certificate template ID  
\- Drive folder IDs

\---

\#\#\# \`ids.gs\`

Functions:  
\- \`generateParticipantId()\`  
\- \`generateBlindEntryId()\`  
\- \`getNextSequentialId(prefix)\`

\---

\#\#\# \`signup.gs\`

Trigger:  
\- On signup form submit

Functions:  
\- Read signup row  
\- Generate Participant ID  
\- Append/update Participants tab  
\- Send signup confirmation  
\- Send training link  
\- Log email

\---

\#\#\# \`training.gs\`

Trigger:  
\- On training form submit

Functions:  
\- Match student by email  
\- Validate participant exists  
\- Mark training\_complete \= true  
\- Generate certificate PDF  
\- Save certificate to Drive  
\- Email certificate  
\- Send essay entry form link  
\- Log email

\---

\#\#\# \`entry.gs\`

Trigger:  
\- On essay entry form submit

Functions:  
\- Match participant by email  
\- Confirm training completion  
\- Generate Blind Entry ID  
\- Compute word count  
\- Flag over 1,000 words  
\- Check required consent boxes  
\- Append raw entry to Entries tab  
\- Append anonymized entry to Blind Judging Packet  
\- Send confirmation email  
\- Log email

\---

\#\#\# \`judging.gs\`

Functions:  
\- Assign judges  
\- Create judge packets  
\- Import judge form scores  
\- Calculate score averages  
\- Flag top entries  
\- Generate finalist shortlist

\---

\#\#\# \`finalists.gs\`

Functions:  
\- Send finalist notification  
\- Set audio due date  
\- Track audio submission  
\- Mark verified/disqualified  
\- Send winner notification

\---

\#\#\# \`certificates.gs\`

Functions:  
\- Copy Google Slides certificate template  
\- Replace placeholders  
\- Export as PDF  
\- Save to Drive  
\- Return PDF URL

Placeholders:  
\- \`{{STUDENT\_NAME}}\`  
\- \`{{COMPLETION\_DATE}}\`  
\- \`{{PARTICIPANT\_ID}}\`

\---

\#\# 6\. Lightweight Web App

Use Cursor to build a simple branded public app.

Recommended stack:  
\- Next.js  
\- TypeScript  
\- Tailwind CSS  
\- Vercel hosting  
\- No database required for Phase 1  
\- Static pages plus links to Google Forms

Pages:

\#\#\# \`/\`

Forge2gether overview.

\#\#\# \`/contest\`

Main contest landing page.

Sections:  
\- Hero  
\- Why this matters  
\- How it works  
\- Prizes  
\- Eligibility  
\- Timeline  
\- Essay prompt  
\- Training requirement  
\- Finalist audio verification  
\- FAQ  
\- CTA button

\#\#\# \`/rules\`

Official rules page.

\#\#\# \`/privacy\`

Privacy policy page.

\#\#\# \`/training\`

Explains training and links to training form.

\#\#\# \`/submit\`

Explains submission requirements and links to essay entry form.

\#\#\# \`/faq\`

Student/parent FAQ.

\#\#\# \`/admin\`

Optional protected page.  
For Phase 1, this can simply link to:  
\- Operations Sheet  
\- Signup Form  
\- Training Form  
\- Entry Form  
\- Judging Form

Authentication:  
\- Use simple password protection or Vercel environment variable.  
\- Do not build full user auth in Phase 1\.

\---

\#\# 7\. Data Privacy / Compliance Notes

Because entrants are minors, be conservative.

Do:  
\- Collect only necessary data  
\- Get parent/guardian consent  
\- Keep judging blind  
\- Limit access to Sheets  
\- Restrict Drive folders  
\- Avoid public display of student names without permission  
\- Use consent language before publication  
\- Allow deletion request process

Do not:  
\- Publicly share raw submissions  
\- Give judges student identity  
\- Store unnecessary demographic/sensitive data  
\- Ask students to upload audio until finalist stage

\---

\#\# 8\. Admin Roles

\#\#\# Program Admin  
Can access all data.

\#\#\# Operations Admin  
Can view Participants, Entries, Finalists.

\#\#\# Judge  
Can only view blind entries and submit scores.

\#\#\# Technical Admin  
Can edit Apps Script and website.

\---

\#\# 9\. Folder Structure

Google Drive folders:

\`Forge2gether Contest 2026\`  
\- \`01 Forms\`  
\- \`02 Operations Sheets\`  
\- \`03 Certificates\`  
\- \`04 Blind Judging Packets\`  
\- \`05 Finalist Audio\`  
\- \`06 Interviewee Consents\`  
\- \`07 Official Rules\`  
\- \`08 Email Templates\`

\---

\#\# 10\. Email Templates

\#\#\# Signup Confirmation

Subject:  
\`You're signed up for the Forge2gether Essay Contest\`

Body:  
\- Confirm signup  
\- Explain next step: training  
\- Include training link  
\- Mention certificate after completion

\---

\#\#\# Training Completion / Certificate

Subject:  
\`Your Forge2gether Conversation Training Certificate\`

Body:  
\- Congratulate student  
\- Attach certificate  
\- Include essay submission link  
\- Remind them to conduct meaningful conversation before writing

\---

\#\#\# Essay Submission Confirmation

Subject:  
\`Your Forge2gether Essay Contest entry has been received\`

Body:  
\- Confirm receipt  
\- Explain judging process  
\- Remind that finalists may need audio verification

\---

\#\#\# Finalist Notification

Subject:  
\`You have been selected as a Forge2gether Essay Contest Finalist\`

Body:  
\- Congratulate student  
\- Request audio verification  
\- Request interviewee consent  
\- State deadline  
\- Explain failure to submit may result in disqualification

\---

\#\#\# Winner Notification

Subject:  
\`Congratulations — Forge2gether Essay Contest Winner\`

Body:  
\- Congratulate student  
\- Explain prize process  
\- Explain tax/1099 requirements if applicable  
\- Request payment information securely

\---

\#\# 11\. Cursor Build Plan

\#\#\# Cursor Project Setup

Create repo:

\`forge2gether-contest\`

Suggested structure:

\`\`\`txt  
forge2gether-contest/  
  product.md  
  README.md  
  .cursor/  
    rules/  
      project-overview.mdc  
      tech-stack.mdc  
      apps-script.mdc  
      privacy-and-minors.mdc  
      ui-style.mdc  
  web/  
    app/  
    components/  
    lib/  
    public/  
  google-apps-script/  
    config.gs  
    ids.gs  
    signup.gs  
    training.gs  
    entry.gs  
    judging.gs  
    finalists.gs  
    certificates.gs  
    emailTemplates.gs  
  docs/  
    forms/  
    email-templates.md  
    judging-rubric.md  
    admin-runbook.md  
    data-dictionary.md  
