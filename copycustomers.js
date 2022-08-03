const customers = [
    {
      name: {
        title: 'dr',
        first: 'TK -',
        last: '421'
      },
      location: {
        street: {
          number:'Sector',
          name: 'AA-345'
        },
        city: 'DS-1',
        state: 'Alabama',
        country: 'United States',
        postcode: 66032,
        coordinates: {
          latitude: '11.2090',
          longitude: '139.7209'
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown'
        }
      },
      email: 'TK-421@ImperialForces.aol',
      dob: {
        date: '1977-03-02T13:05:47.042Z',
        age: 30
      },
      registered: {
        date: '1977-07-09T06:54:45.213Z',
        age: 8
      },
      phone: '(003)-035-5758',
      cell: '(748)-746-0429',
      id: {
        name: 'SSN',
        value: '485-07-4516'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'mx',
        first: 'TK -',
        last: '710'
      },
      location: {
        street: {
          number: 327,
          name: 'Docking Bay'
        },
        city: 'DS-1',
        state: 'Nevada',
        country: 'United States',
        postcode: 48932,
        coordinates: {
          latitude: '38.5471',
          longitude: '1.3862'
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City'
        }
      },
      email: 'TK-710@ImperialForces.aol',
      dob: {
        date: '3277-01-19T03:05:38.179Z',
        age: 55
      },
      registered: {
        date: '7997-01-19T13:16:48.281Z',
        age: 9
      },
      phone: '(470)-844-7246',
      cell: '(845)-543-8884',
      id: {
        name: 'SSN',
        value: '289-72-0803'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/54.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/54.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'ms',
        first: 'TK -',
        last: '450'
      },
      location: {
        street: {
          number: 228,
          name: 'Docking Bay'
        },
        city: 'DS-1',
        state: 'New York',
        country: 'United States',
        postcode: 71020,
        coordinates: {
          latitude: '-39.4052',
          longitude: '-130.0640'
        },
        timezone: {
          offset: '-11:00',
          description: 'Midway Island, Samoa'
        }
      },
      email: 'TK-450@GalacticEmpire.netscape',
      dob: {
        date: '3277-05-22T13:08:59.261Z',
        age: 26
      },
      registered: {
        date: '3285-06-07T18:01:37.269Z',
        age: 9
      },
      phone: '(092)-732-6430',
      cell: '(314)-683-6986',
      id: {
        name: 'SSN',
        value: '627-52-0613'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/12.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/12.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'Ms',
        first: 'TK -',
        last: '626'
      },
      location: {
        street: {
          number: 223,
          name: 'Imperial Airfield'
        },
        city: 'Lothal',
        state: 'Kentucky',
        country: 'United States',
        postcode: 42007,
        coordinates: {
          latitude: '54.7425',
          longitude: '-9.3660'
        },
        timezone: {
          offset: '+1:00',
          description: 'Brussels, Copenhagen, Madrid, Paris'
        }
      },
      email: 'TK-626@ImperialForces.aol',
      dob: {
        date: '3283-09-12T12:00:13.489Z',
        age: 74
      },
      registered: {
        date: '3298-02-18T23:53:44.236Z',
        age: 13
      },
      phone: '(682)-376-5329',
      cell: '(592)-062-9946',
      id: {
        name: 'SSN',
        value: '809-18-3303'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/49.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/49.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: '',
        first: 'TK -',
        last: '1016'
      },
      location: {
        street: {
          number: 21,
          name: 'Sector 472'
        },
        city: 'Jedha City',
        state: 'Utah',
        country: 'United States',
        postcode: 32837,
        coordinates: {
          latitude: '-76.2096',
          longitude: '148.4190'
        },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia'
        }
      },
      email: 'TK-1016@ImperialForces.aol',
      dob: {
        date: '3278-02-23T20:37:19.104Z',
        age: 32
      },
      registered: {
        date: '3294-01-26T09:46:13.746Z',
        age: 17
      },
      phone: '(361)-382-5989',
      cell: '(380)-671-9988',
      id: {
        name: 'SSN',
        value: '837-70-1359'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/16.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/16.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'ms',
        first: 'TK - ',
        last: '104'
      },
      location: {
        street: {
          number: 1300,
          name: 'YT-'
        },
        city: 'Light Fighter',
        state: 'Wisconsin',
        country: 'United States',
        postcode: 31859,
        coordinates: {
          latitude: '18.4849',
          longitude: '47.9729'
        },
        timezone: {
          offset: '+9:30',
          description: 'Adelaide, Darwin'
        }
      },
      email: 'TK-104@GalacticEmpire.netscape',
      dob: {
        date: '3277-05-07T13:45:49.201Z',
        age: 44
      },
      registered: {
        date: '3298-11-27T09:02:26.515Z',
        age: 4
      },
      phone: '(165)-587-8859',
      cell: '(279)-623-6849',
      id: {
        name: 'SSN',
        value: '671-38-6274'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/35.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/35.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'mr',
        first: 'TK - ',
        last: '119'
      },
      location: {
        street: {
          number: '327',
          name: 'Docking Bay'
        },
        city: 'DS-1',
        state: 'Colorado',
        country: 'United States',
        postcode: 45557,
        coordinates: {
          latitude: '-35.2944',
          longitude: '-74.7809'
        },
        timezone: {
          offset: '+9:30',
          description: 'Adelaide, Darwin'
        }
      },
      email: 'TK-119@ImperialForces.aol',
      dob: {
        date: '3277-05-09T15:38:16.442Z',
        age: 47
      },
      registered: {
        date: '1999-07-14T19:08:55.087Z',
        age: 3
      },
      phone: '(549)-009-3669',
      cell: '(215)-924-6324',
      id: {
        name: 'SSN',
        value: '724-93-2979'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/0.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/0.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: '',
        first: 'TK - ',
        last: '108'
      },
      location: {
        street: {
          number: 'Level 1',
          name: 'Security Post 3'
        },
        city: 'Dathomir',
        state: 'Alaska',
        country: 'United States',
        postcode: 56664,
        coordinates: {
          latitude: '75.0898',
          longitude: '-76.6296'
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City'
        }
      },
      email: 'TK-108@ImperialForces.aol',
      dob: {
        date: '3277-11-24T13:25:04.287Z',
        age: 24
      },
      registered: {
        date: '3295-05-23T03:06:11.946Z',
        age: 13
      },
      phone: '(438)-541-8793',
      cell: '(027)-688-4027',
      id: {
        name: 'SSN',
        value: '612-27-4182'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'Trooper ',
        first: 'TK - ',
        last: '147'
      },
      location: {
        street: {
          number: 'Section-4',
          name: '9 ABY'
        },
        city: 'Nevarro',
        state: 'Vermont',
        country: 'United States',
        postcode: 14544,
        coordinates: {
          latitude: '70.7633',
          longitude: '114.7514'
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca'
        }
      },
      email: 'TK-147@GalacticEmpire.netscape',
      dob: {
        date: '3277-08-18T23:52:13.123Z',
        age: 25
      },
      registered: {
        date: '3296-08-08T04:16:30.703Z',
        age: 7
      },
      phone: '(984)-113-9822',
      cell: '(214)-931-7199',
      id: {
        name: 'SSN',
        value: '585-21-9935'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'mr',
        first: 'TK - ',
        last: '8190'
      },
      location: {
        street: {
          number: "14BBY",
          name: 'Imperial Train 239'
        },
        city: 'Bracca',
        state: 'Utah',
        country: 'United States',
        postcode: 59885,
        coordinates: {
          latitude: '-56.0627',
          longitude: '30.9409'
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi'
        }
      },
      email: 'TK-8190@ImperialForces.aol',
      dob: {
        date: '3277-11-09T23:22:01.122Z',
        age: 37
      },
      registered: {
        date: '3296-08-03T20:36:38.029Z',
        age: 8
      },
      phone: '(676)-412-1513',
      cell: '(725)-782-9030',
      id: {
        name: 'SSN',
        value: '041-29-3403'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/39.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/39.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'mr',
        first: 'TK - ',
        last: '216'
      },
      location: {
        street: {
          number: '1 ABY',
          name: 'Quarantine Zone'
        },
        city: 'Dathomir',
        state: 'Montana',
        country: 'United States',
        postcode: 93575,
        coordinates: {
          latitude: '-48.0153',
          longitude: '-26.4141'
        },
        timezone: {
          offset: '+1:00',
          description: 'Brussels, Copenhagen, Madrid, Paris'
        }
      },
      email: 'TK-216@ImperialForces.aol',
      dob: {
        date: '3277-09-29T04:05:23.358Z',
        age: 37
      },
      registered: {
        date: '1995-07-05T04:01:20.447Z',
        age: 13
      },
      phone: '(386)-902-8858',
      cell: '(769)-588-7161',
      id: {
        name: 'SSN',
        value: '861-58-6713'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
      },
      nat: 'US'
    },
    {
      name: {
        title: 'mr',
        first: 'TK - ',
        last: '14057'
      },
      location: {
        street: {
          number: '0 BBY',
          name: 'Eadu Deployment'
        },
        city: 'Aargonar',
        state: 'Kansas',
        country: 'United States',
        postcode: 88349,
        coordinates: {
          latitude: '31.7772',
          longitude: '157.4169'
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland'
        }
      },
      email: 'TK-14057ImperialForces.aol',
      dob: {
        date: '3277-03-22T21:25:32.113Z',
        age: 42
      },
      registered: {
        date: '3299-11-12T08:36:40.026Z',
        age: 15
      },
      phone: '(133)-788-2327',
      cell: '(239)-062-8290',
      id: {
        name: 'SSN',
        value: '732-27-7395'
      },
      picture: {
        large: 'rss/images.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
      },
      nat: 'US'
    }
  ]
  