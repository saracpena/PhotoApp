import Photos from '../Photos';
import Users from '../redux/Users';

const UserPosts = [
    {
        'name': 'Ella and I',
        'postedDate': '01/15/2021',
        'postedBy': 'Ray Brown',
        'source': '../Pictures/BrownElla.jpg',
        'likes':'455030',
        'comments': [
            {
                'comment': 'I remember that day like it was yesterday!',
                'by':'Ella Fitzgerald'
            },
            {
                'comment': 'Great candid!',
                'by':'Miles'
            },
            {
                'comment': 'Good times!',
                'by':'Ray Brown'
            }
        ]
    },
    {
        'name': 'Ray Bass',
        postedDate: '01/20/2021',
        postedBy: 'Ray Brown',
        source: '../Pictures/RayBass.jpg',
        likes:'343020',
        comments: [
            {
                comment: 'Always in the pocket!',
                by:'Miles Davis'
            }
        ]
    },
    {
        name: 'Young Ray',
        postedDate: '01/21/2021',
        postedBy: 'Ray Brown',
        source: '../Pictures/Young Ray.jpg',
        likes:'230010',
        comments: [
            {
                comment: 'My best friend and bass player!',
                by:'Ella'
            }
        ]
    },
    {
        name: 'Ella Gig',
        postedDate: '01/10/2021',
        postedBy: 'Ella Fitzgerald',
        source: '../Pictures/Ella Gig.jpg',
        likes:'120300',
        comments: [
            {
                comment: 'Fantastic shot!',
                by:'Miles Davis'
            },
            {
                comment: 'Cheers to my best friend!',
                by:'Ray Brown'
            },
            {
                comment: 'Thank you!',
                by:'Ella'
            }
        ]
    },
    {
        name: 'Ella Solo 1',
        postedDate: '01/15/2021',
        postedBy: 'Ella Fitzgerald',
        source: '../Pictures/Ella Solo 1.jpg',
        likes:'233040',
        comments: [
            {
                comment: 'Beauty and Talent!',
                by:'Miles Davis'
            }
        ]
    },
    {
        name: 'Ella and Marylin',
        postedDate: '01/19/2021',
        postedBy: 'Ella Fitzgerald',
        source: '../Pictures/EllaMarylin.jpg',
        likes:'650000',
        comments: [
            {
                comment: 'Good one!',
                by:'Ray Brown'
            },
            {
                comment: 'Great memories!',
                by:'Ella Fitzgerald'
            }
        ]
    },
    {
        name: 'Miles 2',
        postedDate: '01/24/2021',
        postedBy: 'Miles Davis',
        source: '../Pictures/Miles Gig 2.jpg',
        likes:'133000',
        comments: [
            {
                comment: 'Killer horn player!',
                by:'Ray Brown'
            },
            {
                comment: 'In the zone!',
                by:'Ella Fitzgerald'
            },
            {
                comment: 'You know how it is!',
                by:'Miles Davis'
            }
        ]
    },
    {
        name: 'Miles Gig',
        postedDate: '01/26/2021',
        postedBy: 'Miles Davis',
        source: '../Pictures/Miles Gig.jpg',
        likes:'223002',
        comments: [
            {
                comment: 'I remember that look!',
                by:'Ray Brown'
            },
            {
                comment: 'Some things never change!',
                by:'Miles Davis'
            }
        ]
    },
    {
        name: 'Miles Solo',
        postedDate: '01/30/2021',
        postedBy: 'Miles Davis',
        source: '../Pictures/Miles Solo.jpg',
        likes:'245838',
        comments: [
            {
                comment: 'Nice picture, Miles!',
                by:'Ella Fitzgerald'
            },
            {
                comment: 'There he is!',
                by:'Ray Brown'
            }
        ]
    }
];

export default UserPosts;