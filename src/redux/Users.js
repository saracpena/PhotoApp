import Pictures from '../Pictures';

const users = [
    {
        'name': 'Ray Brown',
        'email': 'Ray@brown.com',
        'password': '12345678',
        'isLoggedIn': false,
        'favorites': ['Ella and I', 'Miles Solo', 'Ella Solo 1'],
        'picture' : [
            {  
                'name': 'Ella and I',
                'date': '01/15/2021',
                'likes': 455030,
                'source': '../Pictures/BrownElla',
                'profile': true,
                
            },
            { 
                'name': 'Ray Bass',
                'date': '01/20/2021',
                'likes': 343020,
                'source': '../Pictures/RayBass.jpg',
                'profile': false
            },
            { 
                'name': 'Young Ray',
                'date': '01/21/2021',
                'likes': 230010,
                'source': '../Pictures/Young Ray.jpg',
                'profile': false
            }

        ]

    },
    {
        'name': 'Ella Fitzgerald',
        'email': 'ella@fitzgerald.com',
        'password': '87654321',
        'isLoggedIn': false,
        'favorites': ['Ella and I', 'Miles Solo', 'Young Ray'],
        'picture' : [
            { 
                'name': 'Ella Gig',
                'date': '01/10/2021',
                'likes': 120300,
                'source': '../Pictures/Ella Gig.jpg',
                'profile': true
            },
            { 
                'name': 'Ella Solo 1',
                'date': '01/15/2021',
                'likes': 233040,
                'source': '../Pictures/Ella Solo 1.jpg',
                'profile': false
            },
            { 
                'name': 'Ella and Marylin',
                'date': '01/19/2021',
                'likes': 650000,
                'source': '../Pictures/EllaMarylin.jpg',
                'profile': false
            }

        ]

    },
    {
        'name': 'Miles Davis',
        'email': 'miles@davis.com',
        'password': '143Davis',
        'isLoggedIn': false,
        'favorites': ['Ray Bass', 'Ella Solo 1', 'Miles Gig 2'],
        'picture' : [
            { 
                'name': 'Miles 2',
                'date': '01/24/2021',
                'likes': 133000,
                'source': '../Pictures/Miles Gig 2.jpg',
                'profile': true
            },
            { 
                'name': 'Miles Gig',
                'date': '01/26/2021',
                'likes': 223002,
                'source': '../Pictures/Miles Gig.jpg',
                'profile': false
            },
            { 
                'name': 'Miles Solo',
                'date': '01/30/2021',
                'likes': 245838,
                'source': '../Pictures/Miles Solo.jpg',
                'profile': false
            }

        ]

    }

];
export default users;