export const options = [
    {
        division     : 'pure',
        option       : 'attack',
        label        : '공격력',
        minValue     : 30,
        maxValue     : 47,
        weightedValue: 4
    },
    {
        division     : 'percentage',
        option       : 'attackPercentage',
        label        : '공격력(%)',
        minValue     : 4,
        maxValue     : 8,
        weightedValue: 1
    },
    {
        division     : 'pure',
        option       : 'defend',
        label        : '방어력',
        minValue     : 25,
        maxValue     : 34,
        weightedValue: 5
    },
    {
        division     : 'percentage',
        option       : 'defendPercentage',
        label        : '방어력(%)',
        minValue     : 4,
        maxValue     : 8,
        weightedValue: 1
    },
    {
        division     : 'pure',
        option       : 'hp',
        label        : '생명력',
        minValue     : 147,
        maxValue     : 202,
        weightedValue: 3
    },
    {
        division     : 'percentage',
        option       : 'hpPercentage',
        label        : '생명력(%)',
        minValue     : 4,
        maxValue     : 8,
        weightedValue: 1
    },
    {
        division     : 'percentage',
        option       : 'criticalPercentage',
        label        : '치명타 확률(%)',
        minValue     : 3,
        maxValue     : 5,
        weightedValue: 1.5
    },
    {
        division     : 'percentage',
        option       : 'criticalDamagePercentage',
        label        : '치명타 피해(%)',
        minValue     : 3,
        maxValue     : 7,
        weightedValue: 1.1
    },
    {
        division     : 'percentage',
        option       : 'hitPercentage',
        label        : '효과적중(%)',
        minValue     : 4,
        maxValue     : 8,
        weightedValue: 1
    },
    {
        division     : 'percentage',
        option       : 'resistancePercentage',
        label        : '효과저항(%)',
        minValue     : 4,
        maxValue     : 8,
        weightedValue: 1
    },
    {
        division     : 'percentage',
        option       : 'speed',
        label        : '속도',
        minValue     : 1,
        maxValue     : 4,
        weightedValue: 2
    },
];


// minimun value of calculation
export const beforeRefineScore = {
    bad    : 39,
    notBad : 40,
    normal : 46,
    better : 51,
    good   : 56,
    perfect: 61
};

export const afterRefineScore = {
    bad    : 49,
    notBad : 50,
    normal : 56,
    better : 61,
    good   : 66,
    perfect: 71
}