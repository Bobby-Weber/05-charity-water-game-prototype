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
    obstacles: {
      easy: [
        { angle: '222deg', distance: '0.333' }, { angle: '317deg', distance: '0.318' }

      ], normal: [
        { angle: '222deg', distance: '0.333' }, { angle: '317deg', distance: '0.318' }, { angle: '269deg', distance: '0.314' }
      ], hard: [
        { angle: '222deg', distance: '0.333' }, { angle: '317deg', distance: '0.318' }, { angle: '269deg', distance: '0.314' },
        { angle: '245deg', distance: '0.396' }, { angle: '295deg', distance: '0.389' }, { angle: '270deg', distance: '0.154' }
      ]
    }
  },
  {
    name: "Level 2: Trifecta",
    wellCount: 3,
    villages: [
      { angle: '269deg', distance: '0.554', rotation: '359deg', className: 'village-outside-center' },
      { angle: '152deg', distance: '0.554', rotation: '242deg', className: 'village-outside-center' },
      { angle: '356deg', distance: '0.554', rotation: '86deg', className: 'village-outside-center' }

    ],
    deposits: [
      { angle: '204deg', distance: '0.309', className: 'deposit-one' },
      { angle: '108deg', distance: '0.299', className: 'deposit-two' }
    ],
    obstacles: {
      easy: [
        { angle: '75deg', distance: '0.267' }, { angle: '94deg', distance: '0.158' }, { angle: '148deg', distance: '0.359' },
        { angle: '254deg', distance: '0.370' }, { angle: '220deg', distance: '0.175' }, { angle: '183deg', distance: '0.361' },
        { angle: '339deg', distance: '0.329' }, { angle: '11deg', distance: '0.409' }

      ],
      normal: [
        { angle: '75deg', distance: '0.267' }, { angle: '94deg', distance: '0.158' }, { angle: '148deg', distance: '0.359' },
        { angle: '254deg', distance: '0.370' }, { angle: '220deg', distance: '0.175' }, { angle: '183deg', distance: '0.361' },
        { angle: '339deg', distance: '0.329' }, { angle: '11deg', distance: '0.409' }, { angle: '97deg', distance: '0.405' },
        { angle: '231deg', distance: '0.303' }, { angle: '218deg', distance: '0.385' }, { angle: '30deg', distance: '0.424' },
        { angle: '353deg', distance: '0.403' }, { angle: '129deg', distance: '0.387' }
      ],
      hard: [
        { angle: '75deg', distance: '0.267' }, { angle: '94deg', distance: '0.158' }, { angle: '148deg', distance: '0.359' },
        { angle: '254deg', distance: '0.370' }, { angle: '220deg', distance: '0.175' }, { angle: '183deg', distance: '0.361' },
        { angle: '339deg', distance: '0.329' }, { angle: '11deg', distance: '0.409' }, { angle: '97deg', distance: '0.405' },
        { angle: '231deg', distance: '0.303' }, { angle: '218deg', distance: '0.385' }, { angle: '30deg', distance: '0.424' },
        { angle: '353deg', distance: '0.403' }, { angle: '129deg', distance: '0.387' }, { angle: '196deg', distance: '0.403' },
        { angle: '166deg', distance: '0.214' }, { angle: '166deg', distance: '0.427' }, { angle: '333deg', distance: '0.417' },
        { angle: '11deg', distance: '0.256' }, { angle: '316deg', distance: '0.389' }

      ]
    }
  },
  {
    name: "Level 3: Minefield",
    wellCount: 2,
    villages: [
      { angle: '307deg', distance: '0.554', rotation: '37deg', className: 'village-outside-center' },
      { angle: '159deg', distance: '0.554', rotation: '249deg', className: 'village-outside-center' },
      { angle: '104deg', distance: '0.554', rotation: '194deg', className: 'village-outside-center' }

    ],
    deposits: [
      { angle: '229deg', distance: '0.462', className: 'deposit-one' }

    ],
    obstacles: {
      easy: [
        { angle: '219deg', distance: '0.457' }, { angle: '241deg', distance: '0.456' }, { angle: '253deg', distance: '0.384' },
        { angle: '266deg', distance: '0.445' }, { angle: '283deg', distance: '0.368' }, { angle: '296deg', distance: '0.451' },
        { angle: '207deg', distance: '0.396' }, { angle: '193deg', distance: '0.459' }, { angle: '182deg', distance: '0.382' },
        { angle: '169deg', distance: '0.458' }, { angle: '206deg', distance: '0.248' }, { angle: '246deg', distance: '0.212' },
        { angle: '166deg', distance: '0.248' }, { angle: '203deg', distance: '0.083' }, { angle: '297deg', distance: '0.173' },
        { angle: '311deg', distance: '0.305' }, { angle: '344deg', distance: '0.325' }, { angle: '359deg', distance: '0.204' },
        { angle: '90deg', distance: '0.150' }, { angle: '122deg', distance: '0.325' }, { angle: '93deg', distance: '0.383' },
        { angle: '55deg', distance: '0.303' }, { angle: '24deg', distance: '0.341' }, { angle: '145deg', distance: '0.407' },
        { angle: '329deg', distance: '0.413' }
      ],
      normal: [
        { angle: '219deg', distance: '0.457' }, { angle: '241deg', distance: '0.456' }, { angle: '253deg', distance: '0.384' },
        { angle: '266deg', distance: '0.445' }, { angle: '283deg', distance: '0.368' }, { angle: '296deg', distance: '0.451' },
        { angle: '207deg', distance: '0.396' }, { angle: '193deg', distance: '0.459' }, { angle: '182deg', distance: '0.382' },
        { angle: '169deg', distance: '0.458' }, { angle: '206deg', distance: '0.248' }, { angle: '246deg', distance: '0.212' },
        { angle: '166deg', distance: '0.248' }, { angle: '203deg', distance: '0.083' }, { angle: '297deg', distance: '0.173' },
        { angle: '311deg', distance: '0.305' }, { angle: '344deg', distance: '0.325' }, { angle: '359deg', distance: '0.204' },
        { angle: '90deg', distance: '0.150' }, { angle: '122deg', distance: '0.325' }, { angle: '93deg', distance: '0.383' },
        { angle: '55deg', distance: '0.303' }, { angle: '24deg', distance: '0.341' }, { angle: '145deg', distance: '0.407' },
        { angle: '329deg', distance: '0.413' }, { angle: '20deg', distance: '0.053' }, { angle: '134deg', distance: '0.159' },
        { angle: '92deg', distance: '0.282' }, { angle: '72deg', distance: '0.374' }, { angle: '2deg', distance: '0.368' },
        { angle: '48deg', distance: '0.415' }, { angle: '112deg', distance: '0.431' }, { angle: '39deg', distance: '0.189' },
        { angle: '162deg', distance: '0.363' }, { angle: '274deg', distance: '0.273' }

      ],
      hard: [
        { angle: '219deg', distance: '0.457' }, { angle: '241deg', distance: '0.456' }, { angle: '253deg', distance: '0.384' },
        { angle: '266deg', distance: '0.445' }, { angle: '283deg', distance: '0.368' }, { angle: '296deg', distance: '0.451' },
        { angle: '207deg', distance: '0.396' }, { angle: '193deg', distance: '0.459' }, { angle: '182deg', distance: '0.382' },
        { angle: '169deg', distance: '0.458' }, { angle: '206deg', distance: '0.248' }, { angle: '246deg', distance: '0.212' },
        { angle: '166deg', distance: '0.248' }, { angle: '203deg', distance: '0.083' }, { angle: '297deg', distance: '0.173' },
        { angle: '311deg', distance: '0.305' }, { angle: '344deg', distance: '0.325' }, { angle: '359deg', distance: '0.204' },
        { angle: '90deg', distance: '0.150' }, { angle: '122deg', distance: '0.325' }, { angle: '93deg', distance: '0.383' },
        { angle: '55deg', distance: '0.303' }, { angle: '24deg', distance: '0.341' }, { angle: '145deg', distance: '0.407' },
        { angle: '329deg', distance: '0.413' }, { angle: '20deg', distance: '0.053' }, { angle: '134deg', distance: '0.159' },
        { angle: '92deg', distance: '0.282' }, { angle: '72deg', distance: '0.374' }, { angle: '2deg', distance: '0.368' },
        { angle: '48deg', distance: '0.415' }, { angle: '112deg', distance: '0.431' }, { angle: '39deg', distance: '0.189' },
        { angle: '162deg', distance: '0.363' }, { angle: '274deg', distance: '0.273' }, { angle: '229deg', distance: '0.331' },
        { angle: '312deg', distance: '0.410' }, { angle: '139deg', distance: '0.275' }, { angle: '28deg', distance: '0.452' },
        { angle: '349deg', distance: '0.469' }, { angle: '333deg', distance: '0.213' }, { angle: '129deg', distance: '0.439' },
        { angle: '173deg', distance: '0.326' }, { angle: '210deg', distance: '0.322' }, { angle: '261deg', distance: '0.310' }

      ]
    }
  },
  {
    name: "Level 4: The Snake",
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
      ]
    }
  },
  {
    name: "Level 5: X Marks the Spot",
    wellCount: 3,
    villages: [
      { angle: '359deg', distance: '0.554', rotation: '89deg', className: 'village-outside-center' },
      { angle: '179deg', distance: '0.554', rotation: '269deg', className: 'village-outside-center' },
      { angle: '90deg', distance: '0.554', rotation: '180deg', className: 'village-outside-center' },
      { angle: '110deg', distance: '0.554', rotation: '200deg', className: 'village-outside-center' },
      { angle: '70deg', distance: '0.554', rotation: '160deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '267deg', distance: '0.443', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg', distance: '0.456' }, { angle: '46deg', distance: '0.391' },
        { angle: '47deg', distance: '0.323' }, { angle: '49deg', distance: '0.258' }, { angle: '51deg', distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }
      ],
      normal: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg', distance: '0.456' }, { angle: '46deg', distance: '0.391' },
        { angle: '47deg', distance: '0.323' }, { angle: '49deg', distance: '0.258' }, { angle: '51deg', distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }, { angle: '69deg', distance: '0.017' },
        { angle: '272deg', distance: '0.208' }, { angle: '5deg', distance: '0.205' }, { angle: '90deg', distance: '0.232' },
        { angle: '174deg', distance: '0.189' }
      ],
      hard: [
        { angle: '224deg', distance: '0.434' }, { angle: '224deg', distance: '0.359' }, { angle: '314deg', distance: '0.441' },
        { angle: '315deg', distance: '0.375' }, { angle: '315deg', distance: '0.304' }, { angle: '223deg', distance: '0.286' },
        { angle: '223deg', distance: '0.218' }, { angle: '317deg', distance: '0.231' }, { angle: '317deg', distance: '0.160' },
        { angle: '225deg', distance: '0.144' }, { angle: '45deg', distance: '0.456' }, { angle: '46deg', distance: '0.391' },
        { angle: '47deg', distance: '0.323' }, { angle: '49deg', distance: '0.258' }, { angle: '51deg', distance: '0.189' },
        { angle: '131deg', distance: '0.452' }, { angle: '131deg', distance: '0.388' }, { angle: '130deg', distance: '0.323' },
        { angle: '130deg', distance: '0.260' }, { angle: '130deg', distance: '0.194' }, { angle: '69deg', distance: '0.017' },
        { angle: '272deg', distance: '0.208' }, { angle: '5deg', distance: '0.205' }, { angle: '90deg', distance: '0.232' },
        { angle: '174deg', distance: '0.189' }, { angle: '250deg', distance: '0.317' }, { angle: '293deg', distance: '0.320' },
        { angle: '339deg', distance: '0.321' }, { angle: '25deg', distance: '0.329' }, { angle: '70deg', distance: '0.334' },
        { angle: '110deg', distance: '0.339' }, { angle: '152deg', distance: '0.302' }, { angle: '199deg', distance: '0.302' }
      ]
    }
  },
  {
    name: "Level 6: Gateway",
    wellCount: 2,
    villages: [
      { angle: '219deg', distance: '0.554', rotation: '309deg', className: 'village-outside-center' },
      { angle: '322deg', distance: '0.554', rotation: '52deg', className: 'village-outside-center' }
    ],
    deposits: [
      { angle: '90deg', distance: '0.424', className: 'deposit-one' },
      { angle: '127deg', distance: '0.416', className: 'deposit-two' },
      { angle: '51deg', distance: '0.418', className: 'deposit-one' }
    ],
    obstacles: {
      easy: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg', distance: '0.111' }, { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' },
        { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg', distance: '0.454' },
        { angle: '11deg', distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg', distance: '0.451' }
      ],
      normal: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg', distance: '0.111' }, { angle: '197deg', distance: '0.253' }, { angle: '191deg', distance: '0.199' },
        { angle: '349deg', distance: '0.217' }, { angle: '344deg', distance: '0.262' }, { angle: '286deg', distance: '0.075' },
        { angle: '85deg', distance: '0.144' },
        { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' }, { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg', distance: '0.454' },
        { angle: '11deg', distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg', distance: '0.451' }
      ],
      hard: [
        { angle: '206deg', distance: '0.445' }, { angle: '334deg', distance: '0.447' }, { angle: '337deg', distance: '0.378' },
        { angle: '204deg', distance: '0.376' }, { angle: '201deg', distance: '0.311' }, { angle: '341deg', distance: '0.315' },
        { angle: '186deg', distance: '0.134' }, { angle: '162deg', distance: '0.082' }, { angle: '357deg', distance: '0.164' },
        { angle: '17deg', distance: '0.111' }, { angle: '197deg', distance: '0.253' }, { angle: '191deg', distance: '0.199' },
        { angle: '349deg', distance: '0.217' }, { angle: '344deg', distance: '0.262' }, { angle: '286deg', distance: '0.075' },
        { angle: '85deg', distance: '0.144' }, { angle: '232deg', distance: '0.234' }, { angle: '251deg', distance: '0.242' },
        { angle: '301deg', distance: '0.267' }, { angle: '316deg', distance: '0.266' }, { angle: '324deg', distance: '0.458' },
        { angle: '314deg', distance: '0.457' }, { angle: '215deg', distance: '0.455' }, { angle: '224deg', distance: '0.458' },
        { angle: '196deg', distance: '0.454' }, { angle: '187deg', distance: '0.459' }, { angle: '178deg', distance: '0.460' },
        { angle: '343deg', distance: '0.460' }, { angle: '352deg', distance: '0.453' }, { angle: '2deg', distance: '0.454' },
        { angle: '11deg', distance: '0.452' }, { angle: '169deg', distance: '0.454' }, { angle: '159deg', distance: '0.450' },
        { angle: '20deg', distance: '0.451' }
      ]
    }
  },
  {
    name: "Level 7: The Ring",
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
        { angle: '97deg', distance: '0.397' }, { angle: '79deg', distance: '0.402' }, { angle: '69deg', distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg', distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg', distance: '0.400' },
        { angle: '17deg', distance: '0.379' }, { angle: '51deg', distance: '0.406' }, { angle: '27deg', distance: '0.383' },
        { angle: '43deg', distance: '0.391' }, { angle: '35deg', distance: '0.386' }
      ], normal: [
        { angle: '270deg', distance: '0.354' }, { angle: '191deg', distance: '0.382' }, { angle: '172deg', distance: '0.380' },
        { angle: '97deg', distance: '0.397' }, { angle: '79deg', distance: '0.402' }, { angle: '69deg', distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg', distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg', distance: '0.400' },
        { angle: '17deg', distance: '0.379' }, { angle: '51deg', distance: '0.406' }, { angle: '27deg', distance: '0.383' },
        { angle: '43deg', distance: '0.391' }, { angle: '35deg', distance: '0.386' }, { angle: '97deg', distance: '0.465' },
        { angle: '79deg', distance: '0.470' }, { angle: '172deg', distance: '0.453' }, { angle: '6deg', distance: '0.450' },
        { angle: '102deg', distance: '0.268' }, { angle: '75deg', distance: '0.269' }, { angle: '12deg', distance: '0.256' },
        { angle: '344deg', distance: '0.264' }, { angle: '168deg', distance: '0.252' }, { angle: '194deg', distance: '0.256' }
      ], hard: [
        { angle: '270deg', distance: '0.354' }, { angle: '191deg', distance: '0.382' }, { angle: '172deg', distance: '0.380' },
        { angle: '97deg', distance: '0.397' }, { angle: '79deg', distance: '0.402' }, { angle: '69deg', distance: '0.398' },
        { angle: '348deg', distance: '0.378' }, { angle: '7deg', distance: '0.371' }, { angle: '232deg', distance: '0.376' },
        { angle: '210deg', distance: '0.385' }, { angle: '220deg', distance: '0.379' }, { angle: '200deg', distance: '0.383' },
        { angle: '250deg', distance: '0.360' }, { angle: '241deg', distance: '0.367' }, { angle: '260deg', distance: '0.357' },
        { angle: '280deg', distance: '0.347' }, { angle: '338deg', distance: '0.373' }, { angle: '291deg', distance: '0.350' },
        { angle: '327deg', distance: '0.368' }, { angle: '301deg', distance: '0.358' }, { angle: '318deg', distance: '0.358' },
        { angle: '308deg', distance: '0.357' }, { angle: '162deg', distance: '0.385' }, { angle: '106deg', distance: '0.402' },
        { angle: '152deg', distance: '0.379' }, { angle: '116deg', distance: '0.396' }, { angle: '143deg', distance: '0.371' },
        { angle: '125deg', distance: '0.390' }, { angle: '134deg', distance: '0.382' }, { angle: '60deg', distance: '0.400' },
        { angle: '17deg', distance: '0.379' }, { angle: '51deg', distance: '0.406' }, { angle: '27deg', distance: '0.383' },
        { angle: '43deg', distance: '0.391' }, { angle: '35deg', distance: '0.386' }, { angle: '97deg', distance: '0.465' },
        { angle: '79deg', distance: '0.470' }, { angle: '172deg', distance: '0.453' }, { angle: '6deg', distance: '0.450' },
        { angle: '102deg', distance: '0.268' }, { angle: '75deg', distance: '0.269' }, { angle: '12deg', distance: '0.256' },
        { angle: '344deg', distance: '0.264' }, { angle: '168deg', distance: '0.252' }, { angle: '194deg', distance: '0.256' },
        { angle: '170deg', distance: '0.315' }, { angle: '182deg', distance: '0.240' }, { angle: '11deg', distance: '0.319' },
        { angle: '358deg', distance: '0.246' }, { angle: '88deg', distance: '0.258' }
      ]
    }
  }
];
