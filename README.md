# Project Overview

## Project Name

Product Junkies
https://admiring-haibt-ba63a0.netlify.app


## Project Description

The purpose of this web application is to provide users with an outlet to declutter their product drawers. Users will post products that they purchasesd but for some reason no longer use, and will allow anyone who comes to the site the ability to claim the item. Ultimately, providing users the ability to declutter their space, while giving other users a chance to try new products for free! Similar to Facebook Marketplace and Craigslist, users will interact via messages or the agreed upon method of communication to finalize the exchange.

## Wireframes

![image](https://user-images.githubusercontent.com/80142574/117384370-c8b95b80-aeb0-11eb-8542-5176c49c4a6a.png)

## Component Hierarchy
![image](https://user-images.githubusercontent.com/80142574/117393958-3a020a00-aec3-11eb-8a2a-5e8a1acc683c.png)

## API and Data Sample

```json
{
    "records": [
        {
            "id": "recSKCvcHYdbyGlmQ",
            "fields": {
                "Created": "2021-05-07T02:24:54.000Z",
                "username": "i_luv_loons",
                "zip_code": "33309",
                "product_name": "shea moisture",
                "category": "Hair",
                "quantity_left": 0.25,
                "product_img": [
                    {
                        "id": "attymDrNzfNlGnRea",
                        "url": "https://dl.airtable.com/.attachments/fe4e9787f548be8c9762283842386bb7/bc693f40/images.jpeg",
                        "filename": "images.jpeg",
                        "size": 6735,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/4112bec492cce0f505009cc770f71831/bd533b07",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/349e6cebe63ec0dbb95caf2b609d93dc/7d30d606",
                                "width": 196,
                                "height": 196
                            },
                            "full": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/08a0a91f2a16b4b466f171bbdb3ce652/30433736",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "avatar_img": [
                    {
                        "id": "att1nlDuDszTu0mJ8",
                        "url": "https://dl.airtable.com/.attachments/724d03da329ac2460c0d64de04e5b7be/dd27087c/Study_claims_to_have_finally_found_the_SECRET_that_can_make_women_...",
                        "filename": "Study_claims_to_have_finally_found_the_SECRET_that_can_make_women_...",
                        "size": 120794,
                        "type": "image/jpeg",
```

### MVP/PostMVP
  

#### MVP 

- Get and post product posts from Airtable
- Use form to create a post
- Sort post by category
- Use search bar to look for products 

#### PostMVP  

- Create user account
- Allow users to delete post
- Add filters to search for post near the user
- Provide product quick view
- Create link to Amazon for additional product details

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 6| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 7| Project Approval | Complete
|May 7| Core Application Structure (HTML, CSS, etc.) | Complete
|May 7| Pseudocode / actual code | Incomplete
|May 8-10| Initial Clickable Model  | Complete
|May 12| MVP | Complete
|May 12-13| CSS Styling | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal| H | 3hrs| 4hrs | 4hrs |
| Airtable Setup | H | .5hrs| .5hrs | .5hrs |
| Pseudocode | H | 2hrs| 2hrs | 2hrs |
| Navigation and clickable icons| H | 3hrs| 5hrs | 5hrs |
| Data population| H | 3hrs| 3hrs | 3hrs |
| Create form for products| H | 3hrs| 5hrs | 5hrs |
| Create product cards| H | 3hrs| 3hrs | 3hrs |
| Create search bar| H | 3hrs| 2hrs | 2hrs |
| Create category dropdowns| H | 1hrs| 2hrs | 2hrs |
| Webpage responsiveness | H | 1hrs| 3hrs | 3hrs |
| CSS Styling | H | 3hrs| 6hrs | 6hrs |
| Create favorite list | L | 2hrs| 6hrs | 6hrs |
| Data edit and deletion | M| 2hrs| 3hrs | 3hrs |
| Review of Functionality | H | 2hrs| 2hrs | 2hrs |
| Presentation Run Through | H | 1hrs| 1hrs | 1hrs |
| Total | H | 38.5hrs| 47.5hrs | 47.5hrs |
## SWOT Analysis

### Strengths:
I had a clear vision of what I wanted my application to look like, and I've used a few of the features from past projects so I have something to reference for the majority of components involved.
### Weaknesses:
Properly executing methods in functional and class components is still an opportunity area. In addition, using the appropriate styling elements to have the application mirror the wireframes.
### Opportunities:
To reinforce all of the concepts learned in unit 2. To add to that, I can familiarize myself further with tools such as bootstrap and other Material UI tools to assist with the design.
### Threats:
Project styling  took more time to complete than estimated, which could placed me at risk at not having MVP done in time. Furthermore, when encountering an issue, I would need to reach out to support resources to prevent being stuck on an issue for over an hour, but these resources are shared so I have to wait for them to become available.
