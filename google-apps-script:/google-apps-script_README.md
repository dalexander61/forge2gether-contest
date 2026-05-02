# Google Apps Script

This directory contains all automation scripts for the Forge2gether Essay Contest.

## Purpose
Automate the workflow between Google Forms, Google Sheets, and email.

## Core Responsibilities
- Generate Participant IDs
- Generate Blind Entry IDs
- Track training completion
- Send certificates
- Process essay submissions
- Prepare blind judging data
- Manage finalist workflow
- Send automated emails

## File Structure
- config.gs
- ids.gs
- signup.gs
- training.gs
- entry.gs
- judging.gs
- finalists.gs
- certificates.gs
- emailTemplates.gs

## Key Principles
- Avoid duplicate processing
- Use header-based sheet lookups
- Log all emails
- Catch and log errors
- Keep scripts modular and readable
