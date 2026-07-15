const LEVELS = [
  {
    name: "Level 1: Fresh Springs",
    wellCount: 1,
    villages: [
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '0deg', distance: '0', className: 'deposit-one' }
    ],
    obstacles: { easy: [], normal: [], hard: [], impossible: [] }
  },
  {
    name: "Level 2: The Oasis Split",
    wellCount: 3,
    villages: [
      { angle: '45deg', distance: '0.554', rotation: '135deg', className: 'village-outside-left' },
      { angle: '180deg', distance: '0.554', rotation: '270deg', className: 'village-outside-center' },
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.25', className: 'deposit-one' },
      { angle: '0deg', distance: '0.30', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '30deg', distance: '0.20' }, { angle: '60deg', distance: '0.35' },
        { angle: '120deg', distance: '0.22' }, { angle: '150deg', distance: '0.40' },
        { angle: '210deg', distance: '0.15' }, { angle: '240deg', distance: '0.30' },
        { angle: '300deg', distance: '0.25' }
      ],
      hard: [], impossible: []
    }
  },
  {
    name: "Level 3: The Outskirts",
    wellCount: 2,
    villages: [
      { angle: '135deg', distance: '0.554', rotation: '225deg', className: 'village-outside-left' },
      { angle: '200deg', distance: '0.554', rotation: '290deg', className: 'village-outside-center' },
      { angle: '315deg', distance: '0.554', rotation: '45deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '45deg', distance: '0.272', className: 'deposit-one' },
      { angle: '225deg', distance: '0.272', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '0deg', distance: '0.16' }, { angle: '90deg', distance: '0.22' },
        { angle: '180deg', distance: '0.18' }, { angle: '190deg', distance: '0.38' },
        { angle: '270deg', distance: '0.20' }, { angle: '55deg', distance: '0.38' },
        { angle: '15deg', distance: '0.38' }, { angle: '345deg', distance: '0.28' },
        { angle: '140deg', distance: '0.35' }, { angle: '235deg', distance: '0.39' },
        { angle: '310deg', distance: '0.34' }
      ],
      hard: [], impossible: []
    }
  },
  {
    name: "Level 4: Opposite Shores",
    wellCount: 2,
    villages: [
      { angle: '170deg', distance: '0.554', rotation: '260deg', className: 'village-outside-left' },
      { angle: '190deg', distance: '0.554', rotation: '280deg', className: 'village-outside-center' },
      { angle: '350deg', distance: '0.554', rotation: '80deg', className: 'village-outside-right' },
      { angle: '10deg',  distance: '0.554', rotation: '100deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.25', className: 'deposit-one' },
      { angle: '270deg', distance: '0.25', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '90deg', distance: '0.12' }, { angle: '90deg', distance: '0.35' },
        { angle: '270deg', distance: '0.12' }, { angle: '270deg', distance: '0.35' },
        { angle: '145deg', distance: '0.22' }, { angle: '155deg', distance: '0.38' },
        { angle: '215deg', distance: '0.25' }, { angle: '225deg', distance: '0.40' },
        { angle: '325deg', distance: '0.20' }, { angle: '335deg', distance: '0.38' },
        { angle: '35deg',  distance: '0.22' }, { angle: '45deg',  distance: '0.40' }
      ],
      hard: [], impossible: []
    }
  },
  {
    name: "Level 5: The Labyrinth Spiral",
    wellCount: 2,
    villages: [
      { angle: '211deg', distance: '0.554', rotation: '301deg', className: 'village-outside-center' },
      { angle: '335deg', distance: '0.554', rotation: '65deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.418', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '211deg', distance: '0.423' }, { angle: '211deg', distance: '0.324' }, { angle: '211deg', distance: '0.241' },
        { angle: '210deg', distance: '0.162' }, { angle: '207deg', distance: '0.074' }, { angle: '329deg', distance: '0.433' },
        { angle: '330deg', distance: '0.329' }, { angle: '333deg', distance: '0.242' }, { angle: '336deg', distance: '0.158' },
        { angle: '345deg', distance: '0.081' }, { angle: '199deg', distance: '0.439' }, { angle: '186deg', distance: '0.444' },
        { angle: '174deg', distance: '0.446' }, { angle: '341deg', distance: '0.442' }, { angle: '354deg', distance: '0.438' },
        { angle: '6deg', distance: '0.441' }, { angle: '18deg', distance: '0.439' }, { angle: '161deg', distance: '0.442' },
        { angle: '32deg', distance: '0.455' }, { angle: '149deg', distance: '0.439' }
      ],
      hard: [], impossible: []
    }
  },
  {
    name: "Level 6: The Hourglass Gate",
    wellCount: 2,
    villages: [
      { angle: '250deg', distance: '0.554', rotation: '340deg', className: 'village-outside-left' },
      { angle: '290deg', distance: '0.554', rotation: '20deg',  className: 'village-outside-right' },
      { angle: '110deg', distance: '0.554', rotation: '200deg', className: 'village-outside-left' },
      { angle: '70deg',  distance: '0.554', rotation: '160deg', className: 'village-outside-right' }
    ],
    deposits: [{ angle: '0deg', distance: '0', className: 'deposit-one' }],
    obstacles: {
      easy: [],
      normal: [
        { angle: '270deg', distance: '0.22' }, { angle: '250deg', distance: '0.32' },
        { angle: '290deg', distance: '0.32' }, { angle: '245deg', distance: '0.44' },
        { angle: '270deg', distance: '0.44' }, { angle: '295deg', distance: '0.44' },
        { angle: '90deg',  distance: '0.22' }, { angle: '110deg', distance: '0.32' },
        { angle: '70deg',  distance: '0.32' }, { angle: '115deg', distance: '0.44' },
        { angle: '90deg',  distance: '0.44' }, { angle: '65deg',  distance: '0.44' },
        { angle: '180deg', distance: '0.25' }, { angle: '0deg',   distance: '0.25' },
        { angle: '215deg', distance: '0.25' }, { angle: '145deg', distance: '0.25' },
        { angle: '325deg', distance: '0.25' }, { angle: '35deg',  distance: '0.25' }
      ],
      hard: [
        { angle: '270deg', distance: '0.44' }, { angle: '252deg', distance: '0.44' }, { angle: '288deg', distance: '0.44' },
        { angle: '244deg', distance: '0.34' }, { angle: '296deg', distance: '0.34' },
        { angle: '270deg', distance: '0.26' }, { angle: '232deg', distance: '0.28' }, { angle: '308deg', distance: '0.28' },
        { angle: '270deg', distance: '0.14' }, { angle: '212deg', distance: '0.22' }, { angle: '328deg', distance: '0.22' },
        { angle: '180deg', distance: '0.25' }, { angle: '0deg',   distance: '0.25' },
        { angle: '90deg',  distance: '0.14' }, { angle: '148deg', distance: '0.22' }, { angle: '32deg',  distance: '0.22' },
        { angle: '90deg',  distance: '0.26' }, { angle: '128deg', distance: '0.28' }, { angle: '52deg',  distance: '0.28' },
        { angle: '116deg', distance: '0.34' }, { angle: '64deg',  distance: '0.34' },
        { angle: '90deg',  distance: '0.44' }, { angle: '108deg', distance: '0.44' }, { angle: '72deg',  distance: '0.44' }
      ],
      impossible: [
        { angle: '270deg', distance: '0.44' }, { angle: '252deg', distance: '0.44' }, { angle: '288deg', distance: '0.44' },
        { angle: '244deg', distance: '0.34' }, { angle: '296deg', distance: '0.34' },
        { angle: '270deg', distance: '0.26' }, { angle: '232deg', distance: '0.28' }, { angle: '308deg', distance: '0.28' },
        { angle: '270deg', distance: '0.14' }, { angle: '212deg', distance: '0.22' }, { angle: '328deg', distance: '0.22' },
        { angle: '180deg', distance: '0.25' }, { angle: '0deg',   distance: '0.25' },
        { angle: '90deg',  distance: '0.14' }, { angle: '148deg', distance: '0.22' }, { angle: '32deg',  distance: '0.22' },
        { angle: '90deg',  distance: '0.26' }, { angle: '128deg', distance: '0.28' }, { angle: '52deg',  distance: '0.28' },
        { angle: '116deg', distance: '0.34' }, { angle: '64deg',  distance: '0.34' },
        { angle: '90deg',  distance: '0.44' }, { angle: '108deg', distance: '0.44' }, { angle: '72deg',  distance: '0.44' }
      ]
    }
  },
  {
    name: "Level 7: The Labyrinth Spiral",
    wellCount: 4,
    villages: [
      { angle: '4deg', distance: '0.554', rotation: '94deg', className: 'village-outside-center' },
      { angle: '271deg', distance: '0.554', rotation: '1deg', className: 'village-outside-center' },
      { angle: '182deg', distance: '0.554', rotation: '272deg', className: 'village-outside-center' },
      { angle: '92deg', distance: '0.554', rotation: '182deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '270deg', distance: '0.203', className: 'deposit-one' },
      { angle: '97deg', distance: '0.148', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [
        { angle: '271deg', distance: '0.367' }, { angle: '94deg', distance: '0.336' }, { angle: '141deg', distance: '0.228' },
        { angle: '45deg', distance: '0.234' }, { angle: '311deg', distance: '0.266' }, { angle: '233deg', distance: '0.266' },
        { angle: '264deg', distance: '0.037' }, { angle: '289deg', distance: '0.306' }, { angle: '254deg', distance: '0.312' },
        { angle: '229deg', distance: '0.139' }, { angle: '30deg', distance: '0.097' }, { angle: '71deg', distance: '0.261' },
        { angle: '115deg', distance: '0.269' }
      ],
      normal: [
        { angle: '271deg', distance: '0.367' }, { angle: '94deg', distance: '0.336' }, { angle: '141deg', distance: '0.228' },
        { angle: '45deg', distance: '0.234' }, { angle: '311deg', distance: '0.266' }, { angle: '233deg', distance: '0.266' },
        { angle: '264deg', distance: '0.037' }, { angle: '289deg', distance: '0.306' }, { angle: '254deg', distance: '0.312' },
        { angle: '229deg', distance: '0.139' }, { angle: '30deg', distance: '0.097' }, { angle: '71deg', distance: '0.261' },
        { angle: '115deg', distance: '0.269' }, { angle: '358deg', distance: '0.311' }, { angle: '186deg', distance: '0.296' }
      ],
      hard: [
        { angle: '271deg', distance: '0.367' }, { angle: '94deg', distance: '0.336' }, { angle: '141deg', distance: '0.228' },
        { angle: '45deg', distance: '0.234' }, { angle: '311deg', distance: '0.266' }, { angle: '233deg', distance: '0.266' },
        { angle: '264deg', distance: '0.037' }, { angle: '289deg', distance: '0.306' }, { angle: '254deg', distance: '0.312' },
        { angle: '229deg', distance: '0.139' }, { angle: '30deg', distance: '0.097' }, { angle: '71deg', distance: '0.261' },
        { angle: '115deg', distance: '0.269' }, { angle: '358deg', distance: '0.311' }, { angle: '186deg', distance: '0.296' },
        { angle: '341deg', distance: '0.256' }, { angle: '168deg', distance: '0.240' }, { angle: '14deg', distance: '0.358' },
        { angle: '26deg', distance: '0.431' }, { angle: '199deg', distance: '0.353' }, { angle: '210deg', distance: '0.434' }
      ], impossible: []
    }
  },
  {
    name: "Level 8: The Labyrinth Spiral",
    wellCount: 3,
    villages: [
      { angle: '359deg', distance: '0.554', rotation: '89deg', className: 'village-outside-center' },
      { angle: '179deg', distance: '0.554', rotation: '269deg', className: 'village-outside-center' },
      { angle: '90deg',  distance: '0.554', rotation: '180deg', className: 'village-outside-center' },
      { angle: '110deg', distance: '0.554', rotation: '200deg', className: 'village-outside-center' },
      { angle: '70deg',  distance: '0.554', rotation: '160deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '267deg', distance: '0.443', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg',  distance: '0.456' }, { angle: '46deg',  distance: '0.391' },
        { angle: '47deg',  distance: '0.323' }, { angle: '49deg',  distance: '0.258' }, { angle: '51deg',  distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }
      ],
      normal: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg',  distance: '0.456' }, { angle: '46deg',  distance: '0.391' },
        { angle: '47deg',  distance: '0.323' }, { angle: '49deg',  distance: '0.258' }, { angle: '51deg',  distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }, { angle: '69deg',  distance: '0.017' },
        { angle: '272deg', distance: '0.208' }, { angle: '5deg',   distance: '0.205' }, { angle: '90deg',  distance: '0.232' },
        { angle: '174deg', distance: '0.189' }
      ],
      hard: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg',  distance: '0.456' }, { angle: '46deg',  distance: '0.391' },
        { angle: '47deg',  distance: '0.323' }, { angle: '49deg',  distance: '0.258' }, { angle: '51deg',  distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }, { angle: '69deg',  distance: '0.017' },
        { angle: '272deg', distance: '0.208' }, { angle: '5deg',   distance: '0.205' }, { angle: '90deg',  distance: '0.232' },
        { angle: '174deg', distance: '0.189' }, { angle: '250deg', distance: '0.317' }, { angle: '293deg', distance: '0.320' },
        { angle: '339deg', distance: '0.321' }, { angle: '25deg',  distance: '0.329' }, { angle: '70deg',  distance: '0.334' },
        { angle: '110deg', distance: '0.339' }, { angle: '152deg', distance: '0.302' }, { angle: '199deg', distance: '0.302' }
      ], impossible: []
    }
  },
  {
    name: "Level 9: The Labyrinth Spiral",
    wellCount: 2,
    villages: [
      { angle: '219deg', distance: '0.554', rotation: '309deg', className: 'village-outside-center' },
      { angle: '322deg', distance: '0.554', rotation: '52deg',  className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '90deg',  distance: '0.424', className: 'deposit-one' },
      { angle: '127deg', distance: '0.416', className: 'deposit-two' },
      { angle: '51deg',  distance: '0.418', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg',  distance: '0.111' }, { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' },
        { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg',   distance: '0.454' },
        { angle: '11deg',  distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg',  distance: '0.451' }
      ],
      normal: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg',  distance: '0.111' }, { angle: '197deg', distance: '0.253' }, { angle: '191deg', distance: '0.199' },
        { angle: '349deg', distance: '0.217' }, { angle: '344deg', distance: '0.262' }, { angle: '286deg', distance: '0.075' },
        { angle: '85deg',  distance: '0.144' },
        { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' }, { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg',   distance: '0.454' },
        { angle: '11deg',  distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg',  distance: '0.451' }
      ],
      hard: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg',  distance: '0.111' }, { angle: '197deg', distance: '0.253' }, { angle: '191deg', distance: '0.199' },
        { angle: '349deg', distance: '0.217' }, { angle: '344deg', distance: '0.262' }, { angle: '286deg', distance: '0.075' },
        { angle: '85deg',  distance: '0.144' }, { angle: '232deg', distance: '0.234' }, { angle: '251deg', distance: '0.242' },
        { angle: '301deg', distance: '0.267' }, { angle: '316deg', distance: '0.266' }, { angle: '324deg', distance: '0.458' },
        { angle: '314deg', distance: '0.457' }, { angle: '215deg', distance: '0.455' }, { angle: '224deg', distance: '0.458' },
        { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' }, { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg',   distance: '0.454' },
        { angle: '11deg',  distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg',  distance: '0.451' }
      ], impossible: []
    }
  },
  {
    name: "Level 10: Fresh Springs",
    wellCount: 1,
    villages: [
      { angle: '89deg', distance: '0.554', rotation: '179deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '270deg', distance: '0.440', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [
        { angle: '270deg', distance: '0.354' }, { angle: '191deg', distance: '0.382' }, { angle: '172deg', distance: '0.380' },
        { angle: '97deg',  distance: '0.397' }, { angle: '79deg',  distance: '0.402' }, { angle: '69deg',  distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg',   distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg',  distance: '0.400' },
        { angle: '17deg',  distance: '0.379' }, { angle: '51deg',  distance: '0.406' }, { angle: '27deg',  distance: '0.383' },
        { angle: '43deg',  distance: '0.391' }, { angle: '35deg',  distance: '0.386' }
      ], normal: [
        { angle: '270deg', distance: '0.354' }, { angle: '191deg', distance: '0.382' }, { angle: '172deg', distance: '0.380' },
        { angle: '97deg',  distance: '0.397' }, { angle: '79deg',  distance: '0.402' }, { angle: '69deg',  distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg',   distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg',  distance: '0.400' },
        { angle: '17deg',  distance: '0.379' }, { angle: '51deg',  distance: '0.406' }, { angle: '27deg',  distance: '0.383' },
        { angle: '43deg',  distance: '0.391' }, { angle: '35deg',  distance: '0.386' }, { angle: '97deg',  distance: '0.465' },
        { angle: '79deg',  distance: '0.470' }, { angle: '172deg', distance: '0.453' }, { angle: '6deg',   distance: '0.450' },
        { angle: '102deg', distance: '0.268' }, { angle: '75deg',  distance: '0.269' }, { angle: '12deg',  distance: '0.256' },
        { angle: '344deg', distance: '0.264' }, { angle: '168deg', distance: '0.252' }, { angle: '194deg', distance: '0.256' }
      ], hard: [
        { angle: '270deg', distance: '0.354' }, { angle: '191deg', distance: '0.382' }, { angle: '172deg', distance: '0.380' },
        { angle: '97deg',  distance: '0.397' }, { angle: '79deg',  distance: '0.402' }, { angle: '69deg',  distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg',   distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg',  distance: '0.400' },
        { angle: '17deg',  distance: '0.379' }, { angle: '51deg',  distance: '0.406' }, { angle: '27deg',  distance: '0.383' },
        { angle: '43deg',  distance: '0.391' }, { angle: '35deg',  distance: '0.386' }, { angle: '97deg',  distance: '0.465' },
        { angle: '79deg',  distance: '0.470' }, { angle: '172deg', distance: '0.453' }, { angle: '6deg',   distance: '0.450' },
        { angle: '102deg', distance: '0.268' }, { angle: '75deg',  distance: '0.269' }, { angle: '12deg',  distance: '0.256' },
        { angle: '344deg', distance: '0.264' }, { angle: '168deg', distance: '0.252' }, { angle: '194deg', distance: '0.256' },
        { angle: '170deg', distance: '0.315' }, { angle: '182deg', distance: '0.240' }, { angle: '11deg',  distance: '0.319' },
        { angle: '358deg', distance: '0.246' }, { angle: '88deg',  distance: '0.258' }
      ], impossible: []
    }
  },
  {
    name: "Level 2: The Oasis Split",
    wellCount: 3,
    villages: [
      { angle: '45deg', distance: '0.554', rotation: '135deg', className: 'village-outside-left' },
      { angle: '180deg', distance: '0.554', rotation: '270deg', className: 'village-outside-center' },
      { angle: '270deg', distance: '0.554', rotation: '0deg', className: 'village-outside-right' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.25', className: 'deposit-one' },
      { angle: '0deg', distance: '0.30', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [],
      normal: [
        { angle: '30deg', distance: '0.20' }, { angle: '60deg', distance: '0.35' },
        { angle: '120deg', distance: '0.22' }, { angle: '150deg', distance: '0.40' },
        { angle: '210deg', distance: '0.15' }, { angle: '240deg', distance: '0.30' },
        { angle: '300deg', distance: '0.25' }
      ],
      hard: [], impossible: []
    }
  }
];
