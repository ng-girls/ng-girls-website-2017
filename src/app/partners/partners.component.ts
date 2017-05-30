import { Component, OnInit } from '@angular/core';
import { Group } from './../models/element';

@Component({
    selector: 'ngg-partners',
    templateUrl: 'partners.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
    partners: Array<Group>;
    site: any;

    constructor() { }

    ngOnInit() {
        this.partners = partners;
        this.site = siteConfig;
    }

}
const partners: Array<Group> = [
    {
        "group": "With support of",
        "elements": [
            {
                "name": "Angular Nights",
                "description": "Angular Nights meetup group - learn Angular by coding",
                "link": "http://www.meetup.com/Angular-Nights/",
                "imageUrl": "ngNights.png"
            },
            {
                "name": "JS-Poland",
                "description": "JS-Poland 2017",
                "link": "http://www.js-poland.pl/",
                "imageUrl": "JS-Poland.png"
            },
            {
                "name": "ng-conf",
                "description": "ng-conf - The world's original Angular conference",
                "link": "https://www.ng-conf.org/",
                "imageUrl": "ng-conf.png"
            }
        ]
    },
    {
        "group": "ngGirls is inspired by Django Girls and makes use of its resources",
        "elements": [
            {
                "name": "Django Girls",
                "description": "Django Girls",
                "link": "https://djangogirls.org/",
                "imageUrl": "djangogirls.png"
            }
        ]
    }
];
const siteConfig: any = {
    "gems": [
        "jekyll-sitemap"
    ],
    "safe": false,
    "markdown": "kramdown",
    "permalink": "/blog/:title",
    "exclude": [
        "/automation/",
        "README.md",
        "LICENSE.txt",
        "CNAME"
    ],
    "title": "ngGirls",
    "email": "info@ng-girls.com",
    "description": "ngGirls is an organization that aims to increase diversity in Tech",
    "baseurl": "",
    "url": "http://ng-girls.org",
    "googleAnalyticsTrackingId": "",
    "googleAnalyticsSiteUrl": "",
    "siteVerification": "AIzaSyCZoEYpnZkkqUryTf4WAYfWNMfQK5xTqCY",
    "organizerName": "ngGirls",
    "organizerAlternateName": "Angular Girls",
    "organizerDescription": "ngGirls is an organization that aims to increase diversity in Tech",
    "organizerEmail": "info@ng-girls.com",
    "organizerLogo": "/assets/img/seo/organizer-logo.png",
    "organizerLink": "http://ng-girls.org/",
    "metaKeywords": "event, angular, google, programming, web, chrome, developers, diversity, javascript, single page application, tel aviv",
    "twitterAccount": "@AngularGirls",
    "socialImageSrcGooglePlus": "/assets/img/seo/sharing-google-plus.png",
    "socialImageSrcTwitter": "/assets/img/seo/sharing-twitter.png",
    "socialImageSrcFacebook": "/assets/img/seo/sharing-facebook.png",
    "c4pUrl": "https://bit.ly/dfua-c4p",
    "c4sponsorsUrl": "mailto:info@ng-girls.org",
    "navigationLinks": [
        {
            "permalink": "/#home",
            "text": "Home"
        },
        {
            "permalink": "/#about",
            "text": "About"
        },
        {
            "permalink": "/#description",
            "text": "Be a part"
        },
        {
            "permalink": "/#organizing-team",
            "text": "Team"
        },
        {
            "permalink": "/#partners",
            "text": "Partners"
        },
        {
            "permalink": "/faq/",
            "text": "FAQ"
        }
    ],
    "bottomNavigationLinks": [
        {
            "permalink": "/JS-Poland/",
            "text": "ngGirls @ JS-Poland"
        },
        {
            "permalink": "/TLV-June-2017/",
            "text": "ngGirls TLV"
        }
    ],
    "rightNavigationButtons": [
        {
            "permalink": "/JS-Poland/",
            "text": "ngGirls @ JS-Poland"
        },
        {
            "permalink": "/TLV-June-2017/",
            "text": "ngGirls TLV"
        }
    ],
    "heroImage": "eclipse.png",
    "heroTitle": "ngGirls",
    "eventDate": "Upcoming workshops: <br/> June 18th, 2017, Warsaw, Poland<br/> June 26th, 2017, Tel-Aviv, Israel",
    "heroButtons": [
        {
            "permalink": "/JS-Poland/",
            "text": "ngGirls @ JS-Poland"
        },
        {
            "permalink": "/TLV-June-2017/",
            "text": "ngGirls TLV"
        }
    ],
    "aboutTitle": "About ngGirls",
    "aboutBlock": [
        {
            "title": "motivation",
            "image": "motivation.png",
            "text": "ngGirls aims to introduce women to the world of technology and increase the diversity. Angular is a great technology to start with. We believe this is a win-win situation!"
        },
        {
            "title": "operation",
            "image": "operation.png",
            "text": "We plan various events and activities in which the participants build and deploy a web application with Angular. We offer guidance to help finding a job in front end development."
        },
        {
            "title": "participation",
            "image": "participation.png",
            "text": "If you're a committed, motivated woman who wants to step into the Web Development world - your place is with us! <br>Want to help? Please get in touch!"
        }
    ],
    "descriptionTitle": "Be a Part of ngGirls",
    "descriptionBlock": [
        {
            "title": "Who is it for?",
            "template": "description-who-is-it-for.html",
            "link": "/#faq",
            "linkTitle": "Check out the FAQ"
        },
        {
            "title": "Can I help?",
            "template": "description-can-i-help.html",
            "link": "/#help",
            "linkTitle": "contact us",
            "text": "Of course! There are several ways you can help: <br/><ul><li><b>Sponsors</b> - with your help we can make our events truly awesome!From granting tickets to Angular conferences, through supplying lunch, to swag - lots of opportunities to help. "
        }
    ],
    "latestNewsTitle": "Latest News",
    "organizingTeamImage": "djangogirls1.jpg",
    "organizingTeamCount": 2,
    "organizingTeamTitle": "Organizing Team",
    "rockstarSpeakersImage": "djangogirls1.jpg",
    "rockstarSpeakersCount": 2,
    "rockstarSpeakersTitle": "Organizing Team",
    "locationBlockTitle": "Location",
    "eventLocationName": "Campus Tel Aviv",
    "eventLocationLink": "https://www.campus.co/tel-aviv/",
    "eventStreetAddress": "Electra Tower- 34th Floor<br>98 Yigal Alon Street",
    "eventAddressLocality": "Tel Aviv",
    "eventAddressLocalityRegion": "",
    "eventPostalCode": "79000",
    "eventAddressCountry": "Israel",
    "eventStartTime": "2014-10-25T10:00",
    "eventDoorTime": "09:00",
    "eventEndTime": "2014-10-25T20:00",
    "eventPlaceCoordinates": "32.0699972,34.7940928",
    "mapCenterCoordinates": "32.0692972,34.7910428",
    "mapMobileCenterCoordinates": "32.0683802,34.7947528",
    "mapUrl": "https://www.google.com/maps/place/Google/@32.0700544,34.7919324,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b9f106b7d51:0x5d3968071ecd1735!8m2!3d32.0700544!4d34.7941211",
    "viewOnMap": "View on Google Maps",
    "venueBlockTitle": "Venue",
    "venueBigImage": "venue_0.jpg",
    "venueSmallImage1": "venue_1.jpg",
    "venueSmallImage2": "venue_2.jpg",
    "venueSmallImage3": "venue_3.jpg",
    "venueTitle": "Kinopalace Cinema",
    "venueFeatures": [
        "3 huge cinema screens",
        "Doulby Digital Surround EX audio system",
        "Located directly in the city center"
    ],
    "organizersTitle": "Organizers",
    "partnersTitle": "Partners",
    "partnersC4sponsorsButton": "Become a sponsor",
    "subscribeImage": "subscribe.jpg",
    "subscribeTitle": "Subscribe for updates",
    "subscribeAction": "https://gdg.us5.list-manage1.com/subscribe/post?u=9fc8aa205b0521b5f05fc8e1e&amp;id=ae0fb459fc",
    "subscribeInfo": "Registration will be open around end of August. Number of tickets are limited. Stay tuned!",
    "socialLinks": null,
    "footerBlocks": [
        {
            "title": "Contact us",
            "links": [
                {
                    "link": "mailto:info@ng-girls.org",
                    "text": "info@ng-girls.org"
                }
            ]
        },
        {
            "title": "",
            "links": [
                {
                    "permalink": "/coc/",
                    "text": "Code of Conduct"
                }
            ]
        }
    ],
    "faqTitle": "Frequently Asked Questions",
    "blogTitle": "Latest news",
    "blogCommentsEnabled": true,
    "discusShortName": "devfestua",
    "showSessions": true,
    "teamBlockTitle": "About us",
    "aboutUs": "ngGirls is aims to introduce women to the world of technology and increase the diversity. The organization is inspired by Django Girls."
};