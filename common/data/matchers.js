window.matchers = [

    /* * * * * Captain abilities * * * * */
    
    {
        name: 'Type-boosting captains',
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i,
        icon: 'atk-up-type'
    },

    {
        name: 'Class-boosting captains',
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i,
        icon: 'atk-up-class'
    },

    {
        name: 'Universal ATK boosting captains',
        target: 'captain',
        matcher: /Boosts.+ATK of (all characters|all others)/i,
        icon: 'atk up'
    },

    {
        name: 'ATK boosting captains',
        target: 'captain',
        matcher: /Boosts ATK/i,
        icon: 'atk up'
    },

    {
        name: 'HP boosting captains',
        target: 'captain',
        matcher: /Boosts (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i,
        icon: 'hp up'
    },

    {
        name: 'RCV boosting captains',
        target: 'captain',
        matcher: /Boosts (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i,
        icon: 'rcv up'
    },

    {
        name: 'Special boosting captains',
        target: 'captain',
        matcher: /Boosts damage.+specials/i,
        icon: 'atk up'
    },

    {
        name: '2x ATK and HP captains',
        target: 'captain',
        matcher: /Boosts (ATK and HP|ATK, HP).+by 2x/i,
        icon: 'atk up'
    },

    {
        name: '2x ATK and RCV captains',
        target: 'captain',
        matcher: /Boosts ATK and RCV.+by 2x/i,
        icon: 'atk up'
    },

    /*{
        name: '1.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.25x/i
    },

    {
        name: '1.5x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.5x/i
    },

    {
        name: '1.75x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.75x/i
    },*/

    {
        name: '2x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2x/i,
        icon: 'atk up'
    },

    {
        name: '2.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.25x/i,
        icon: 'atk up'
    },

    {
        name: '2.5x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.5x/i,
        icon: 'atk up'
    },

    {
        name: '2.75x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.75x/i,
        include: [ 529, 530, 668, 669 ],
        icon: 'atk up'
    },

    {
        name: '3x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3x/i,
        icon: 'atk up'
    },

    {
        name: '3.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.25x/i,
        icon: 'atk up'
    },

    {
        name: '3.5x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.5x/i,
        icon: 'atk up'
    },

    {
        name: '3.75x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.75x/i,
        icon: 'atk up'
    },

    {
        name: '4x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 4x/i,
        icon: 'atk up'
    },

    {
        name: '4.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 4.25x/i,
        icon: 'atk up'
    },

    {
        name: 'HP-based ATK captains',
        target: 'captain',
        matcher: /Boosts ATK.+proportionally to/i,
        icon: 'hp up'
    },

    {
        name: 'Positional captains',
        target: 'captain',
        matcher: /(after scoring|following a chain|perfect|great|good)/i,
        icon: 'GGP'
    },
    
    {
        name: '"Beneficial" Orb captains',
        target: 'captain',
        matcher: /"beneficial/i,
        //matcher: /Makes ((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\])|((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]) and (STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]))) orbs "beneficial"/i
        icon: 'orb match'
    },

    {
        name: 'Chain multipliers',
        target: 'captain',
        matcher: /Boosts.+chain multiplier/i,
        icon: 'chain reducer'
    },
    
    {
        name: 'Combo Boost Captains',
        target: 'captain',
        matcher: /Boosts.+hit in the chain/i,
        icon: 'combo'
    },

    {
        name: 'Cooldown reducers',
        target: 'captain',
        matcher: /Reduces cooldown.+by/i,
        icon: 'reduce cd'
    },

    {
        name: 'Damage reducers',
        target: 'captain',
        matcher: /Reduces (any )?damage received/i,
        icon: 'dmg reduction'
    },

    {
        name: 'Healers',
        target: 'captain',
        matcher: /Recovers/i,
        icon: 'heal'
    },

    {
        name: 'Tankers',
        target: 'captain',
        matcher: /Reduces (any )?damage.+if HP.+99/i,
        icon: 'treshold'
    },

    {
        name: 'Zombies',
        target: 'captain',
        matcher: /Protects from defeat/i,
        icon: 'resilence'
    },
    
    {
        name: 'End of Turn Damage Dealer',
        target: 'captain',
        matcher: /(deals|cuts).+end of each turn/i,
        icon: 'end turn dmg'
    },
    
    {
        name: 'Beli Boosters',
        target: 'captain',
        matcher: /boosts.+Beli/i,
        icon: 'beli'
    },
    
    {
        name: 'EXP Boosters',
        target: 'captain',
        matcher: /boosts.+EXP/i,
        icon: 'exp-boost'
    },
    
    {
        name: 'Drop Doublers',
        target: 'captain',
        matcher: /duplicating a drop/i,
        icon: 'drop'
    },

    /* * * * * Specials * * * * */

    {
        name: 'Type-boosting specials',
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i,
        icon: 'atk-up-type'
    },

    {
        name: 'Class-boosting specials',
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i,
        icon: 'atk-up-class'
    },
    
    {
        name: 'Multiple Stage specials',
        target: 'special',
        matcher: /description/i,
        icon: 'cd-multi-stage'
    },

    {
        name: 'Universal ATK boosting specials',
        target: 'special',
        matcher: /Boosts ATK[^,]+(all characters)/i,
        icon: 'atk up'
    },
    
    {
        name: '1.5x ATK specials',
        target: 'special',
        matcher: /Boosts ATK\D*by 1.5x/i,
        icon: 'atk up'
    },

    {
        name: '1.75x ATK specials',
        target: 'special',
        matcher: /Boosts ATK\D*by 1.75x/i,
        icon: 'atk up'
    },

    {
        name: '2x ATK specials',
        target: 'special',
        matcher: /Boosts ATK\D*by 2x/i,
        icon: 'atk up'
    },
    
    {
        name: '2.25x ATK specials',
        target: 'special',
        matcher: /Boosts ATK\D*by 2.25x/i,
        icon: 'atk up'
    },

    {
        name: 'Conditional ATK boosters',
        target: 'special',
        matcher: /Boosts ATK.+against.+enemies/i,
        icon: 'atk up'
    },

    {
        name: 'Following-turn ATK boosters',
        target: 'special',
        matcher: /(Following the activation.+boosts.+ATK|If during that turn.+boosts.+ATK)/i,
        icon: 'atk up'
    },
    
    {
        name: 'Color Affinity boosters',
        target: 'special',
        matcher: /Boosts the Color Affinity/i,
        icon: 'color affinity'
    },
    
    {
        name: 'Combo Boost Specials',
        target: 'special',
        matcher: /Boost.+hit in the chain/i,
        icon: 'combo'
    },
    
    {
        name: 'RCV boosters',
        target: 'special',
        matcher: /Boosts.+RCV/i,
        icon: 'rcv up'
    },

    {
        name: 'Orb lockers',
        target: 'special',
        matcher: /locks (orbs|all orbs|orb|own orb)/i,
        icon: 'orb lock'
    },

    {
        name: 'Orb boosters',
        target: 'special',
        matcher: /amplifies.+orb/i,
        icon: 'orb boost'
    },
    
    {
        name: '1.5x Orb boost specials',
        target: 'special',
        matcher: /amplifies.+orb\D*by 1.5x/i,
        icon: 'orb boost'
    },

    {
        name: '1.75x Orb boost specials',
        target: 'special',
        matcher: /amplifies.+orb\D*by 1.75x/i,
        icon: 'orb boost'
    },

    {
        name: '2x Orb boost specials',
        target: 'special',
        matcher: /amplifies.+orb\D*by 2x/i,
        icon: 'orb boost'
    },
    
    {
        name: '2.25x Orb boost specials',
        target: 'special',
        matcher: /amplifies.+orb\D*by 2.25x/i,
        icon: 'orb boost'
    },

    {
        name: 'Orb chance boosters',
        target: 'special',
        matcher: /boosts chances of getting.+orbs/i,
        icon: 'orb match'
    },

    {
        name: 'Negative to Positive Orb controllers',
        target: 'special',
        matcher: /(Badly Matching orbs into.+Matching orbs)/i,
        //include: [ 900, 901, 996, 997, 933, 938, 939 ],
        icon: 'orb match'
    },

    {
        name: 'Orb controllers',
        target: 'special',
        matcher: /(Changes.+(orb|orbs))/i,
        icon: 'orb match'
    },
    
    {
        name: 'Full-board orb controllers',
        target: 'special',
        matcher: /(Changes[^,]+all orbs|Changes the orbs in|Changes[^,]*every other orb)/i,
        icon: 'orb match'
    },

    {
        name: 'Self-orb controllers',
        target: 'special',
        matcher: /Changes.+own orb.+into/i,
        icon: 'orb match'
    },

    {
        name: 'Orb randomizers',
        target: 'special',
        matcher: /randomizes.+orb/i,
        icon: 'orb random'
    },

    {
        name: 'Orb switchers',
        target: 'special',
        matcher: /switches orbs/i,
        icon: 'orb switch'
    },
    
    {
        name: 'Orb matchers',
        target: 'special',
        matcher: /(Changes.+(orb|orbs|orbs,))[^,]+Matching/i,
        include: [ 1036, 1037 ],
        icon: 'orb match'
    },

    {
        name: 'Slot emptiers',
        target: 'special',
        matcher: /(Empties|Changes.+into.+\[EMPTY\])/i,
        icon: 'orb empty'
    },

    /*{
        name: 'Slot fillers',
        target: 'special',
        matcher: /(Fills\b|\[EMPTY\] orbs into|Changes.+\[EMPTY\].+into)/i
    },*/

    {
        name: 'Delayers',
        target: 'special',
        matcher: /delays/i,
        icon: 'delay'
    },
    
    {
        name: 'Damage dealer',
        target: 'special',
        matcher: /deals.+to/i,
        icon: 'damage-dealer'
    },
    
    {
        name: 'Single-target damage dealer',
        target: 'special',
        matcher: /deals.+to one enemy/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Multi-target damage dealers',
        target: 'special',
        matcher: /Deals.+to (all|random) enemies/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Area of Effect damage dealers',
        target: 'special',
        matcher: /Deals.+to all enemies/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Multi-hit damage dealers',
        target: 'special',
        matcher: /Deals \d+ hits/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Fixed damage dealers',
        target: 'special',
        matcher: /Deals.+fixed damage/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Typeless damage dealers',
        target: 'special',
        matcher: /Deals.+typeless damage/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Typed damage dealers',
        target: 'special',
        matcher: /Deals.+(\[STR\]|\[DEX\]|\[QCK\]|\[PSY\]|\[INT\]) damage/i,
        icon: 'damage-dealer'
    },
    
    {
        name: 'Additional Damage dealer',
        target: 'special',
        matcher: /Additional.+Damage/i,
        icon: 'bonus-dmg'
    },
    
    {
        name: 'Defense and Barrier Buff Ignoring damage dealer',
        target: 'special',
        matcher: /Deals.+ignore damage negating abilities and barriers/i,
        icon: 'damage-dealer'
    },

    {
        name: 'Healers',
        target: 'special',
        matcher: /Recovers/i
    },

    {
        name: 'Health reducers',
        target: 'special',
        matcher: /Reduces crew's (current )?HP/i
    },

    {
        name: 'Poisoners',
        target: 'special',
        matcher: /(poisons|Inflicts Toxic)/i
    },

    {
        name: 'Poison removers',
        target: 'special',
        matcher: /removes.+poison/i 
    },

    {
        name: 'Health cutters',
        target: 'special',
        matcher: /Cuts.+current HP.+enem/i,
        icon: 'health-cut'
    },

    {
        name: 'HP-based damage dealers',
        target: 'specialNotes',
        matcher: /specialProportional/i,
        icon: 'health-cut'
    },

    {
        name: 'Defense reducers',
        target: 'special',
        matcher: /Reduces the defense/i,
        icon: 'defense boost'
    },

    /*{
        name: 'Meat producers',
        target: 'special',
        matcher: /into( either)?[\s,\[\]A-Zor]+\[RCV\]/
    },

    {
        name: 'Meat converters',
        target: 'special',
        matcher: /\[RCV\].+into/i
    },*/

    {
        name: 'Damage reducers',
        target: 'special',
        matcher: /Reduces (any )?damage received/i,
        icon: 'dmg reduction'
    },

    {
        name: 'Damage nullifiers',
        target: 'special',
        matcher: /Reduces (any )?damage received.+100%/i,
        icon: 'null dmg'
    },
    
    /*{
        name: 'Debuff Reducing Specials',
        target: 'special',
        matcher: /(reduces|removes) [^,]+(Bind|Despair|Silence|Paralysis|Blindness|Poison|No Healing|Chain Limit).+duration/i
    },*/

    {
        name: 'Bind reducers',
        target: 'special',
        matcher: /(reduces|removes).+bind.+duration/i,
        icon: 'reduce bind'
    },

    {
        name: 'Despair reducers',
        target: 'special',
        matcher: /(reduces|removes).+despair.+duration/i,
        icon: 'reduce despair'
    },
    
    {
        name: 'Silence reducers',
        target: 'special',
        matcher: /(reduces|removes).+silence.+duration/i,
        icon: 'silence'
    },
    
    {
        name: 'Paralysis reducers',
        target: 'special',
        matcher: /(reduces|removes).+Paralysis/i,
        icon: 'paralyze'
    },

    {
        name: 'Block orb removers',
        target: 'special',
        matcher: /(empties.+with \[BLOCK\]|changes.+\[BLOCK\].+into|including.+\[BLOCK\])/i,
        include: [ 1383, 1384 ],
        icon: 'orb match'
    },

    {
        name: 'Blindness reducers',
        target: 'special',
        matcher: /(reduces|removes).+blindness/i,
        icon: 'blindness'
    },

    {
        name: 'Crew ATK DOWN reducer',
        target: 'special',
        matcher: /(removes|reduces).+ATK DOWN/i 
    },

    {
        name: 'Crew Increase Damage Taken reducer',
        target: 'special',
        matcher: /(removes|reduces).+Increase Damage Taken/i,
        icon: 'damage double'
    },

    {
        name: 'Crew positive buff reducer',
        target: 'special',
        matcher: /removes.+positive buffs/i,
        icon: 'remove-positive'
    },

    {
        name: 'Enemy End of Turn buff reducer',
        target: 'special',
        matcher: /(removes|reduces).+End of Turn/i,
        icon: 'end turn dmg'
    },

    {
        name: 'Enemy Enrage buff reducer',
        target: 'special',
        matcher: /(removes|reduces).+Enrage/i,
        icon: 'enrage enemy'
    },

    {
        name: 'Enemy ATK UP buff reducer',
        target: 'special',
        matcher: /(removes|reduces).+ATK UP/i,
        icon: 'atk up'
    },

    {
        name: 'Enemy Increased Defense reducer',
        target: 'special',
        matcher: /(removes|reduces).+Increased Defense/i 
    },

    {
        name: 'Enemy Percent Damage Reduction reducer',
        target: 'special',
        matcher: /(removes|reduces).+Percent Damage Reduction/i 
    },

    {
        name: 'Enemy Damage Nullification reducer',
        target: 'special',
        matcher: /(removes|reduces).+Damage Nullification/i 
    },

    {
        name: 'Enemy Threshold Damage Reduction reducer',
        target: 'special',
        matcher: /(removes|reduces).+Threshold Damage Reduction/i 
    },

    {
        name: 'Enemy Barrier reducer',
        target: 'special',
        matcher: /(removes|reduces).+enemy Barrier/i,
        icon: 'hit barrier'
    },

    {
        name: 'Enemy Resilience reducer',
        target: 'special',
        matcher: /(removes|reduces).+Resilience/i 
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Protects from defeat/i,
        icon: 'resilence'
    },
    
    {
        name: 'End of Turn Damage Dealer',
        target: 'special',
        matcher: /(deals|cuts).+end of the turn/i,
        icon: 'end turn dmg'
    },
    
    {
        name: 'Special cooldown reducers',
        target: 'special',
        matcher: /reduces special cooldown/i,
        icon: 'reduce cd'
    },
    
    {
        name: 'Chain Boosters',
        target: 'special',
        matcher: /Adds.+to Chain/i,
        icon: 'chainlimit'
    },
    
    {
        name: 'Chain Lockers',
        target: 'special',
        matcher: /Locks the chain multiplier/i,
        icon: 'chain reducer'
    },
    
    {
        name: 'Chain Multiplier Limit reducer',
        target: 'special',
        matcher: /(removes|reduces).+Chain Multiplier Limit/i,
        icon: 'chain reducer'
    },
    
    {
        name: 'Chain Coefficient Reduction reducer',
        target: 'special',
        matcher: /(removes|reduces).+Chain Coefficient Reduction/i,
        icon: 'chainlimit'
    },
    
    {
        name: '"Beneficial" Orb Enablers',
        target: 'special',
        matcher: /"beneficial/i,
        icon: 'orb match'
    },
    
    /* * * * * Sailor * * * * */
    
    {
        name: 'Has Sailor Ability',
        target: 'sailor',
        matcher: /\S/i,
        icon: 'has sailor'
    },
    
    {
        name: 'Type-boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i,
        icon: 'atk-up-type'
    },
    
    {
        name: 'Class-boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i,
        icon: 'atk-up-class'
    },
    
    {
        name: 'ATK boosting sailors',
        target: 'sailor',
        matcher: /Boosts base ATK/i,
        icon: 'atk up'
    },

    {
        name: 'HP boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i,
        icon: 'hp up'
    },

    {
        name: 'RCV boosting sailors',
        target: 'sailor',
        matcher: /Boosts base (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i,
        icon: 'rcv up'
    },
    
    {
        name: 'Paralysis reducers',
        target: 'sailor',
        matcher: /(reduces|removes|resists).+Paralysis/i,
        icon: 'paralyze'
    },

    {
        name: 'Blindness reducers',
        target: 'sailor',
        matcher: /(reduces|removes|resists).+blindness/i,
        icon: 'blindness'
    },
    
    {
        name: 'Silence reducers',
        target: 'sailor',
        matcher: /(reduces|removes|resists).+silence/i,
        icon: 'silence'
    },
    
    {
        name: 'Special Rewind Restorers',
        target: 'sailor',
        matcher: /Restores (his|her) own special/i,
        icon: 'reduce cd'
    },
    
    {
        name: 'Special Cooldown Reducer on Special Activation',
        target: 'sailor',
        matcher: /When any.+character uses a special, reduces own cooldown/i
    },
    
    {
        name: 'Orb Retainer',
        target: 'sailor',
        matcher: /If this character has.+(STR|DEX|QCK|PSY|INT|RCV).+(GOOD|GREAT|PERFECT)/i,
        icon: 'orb match'
    },
    
    {
        name: 'Blow Away Resistance',
        target: 'sailor',
        matcher: /Cannot be Blown away/i,
        icon: 'blowaway'
    },
    
    {
        name: 'Additional Damage dealer',
        target: 'sailor',
        matcher: /Additional.+Damage/i,
        icon: 'bonus-dmg'
    },
    
    {
        name: '"Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /"beneficial/i,
        icon: 'orb match'
    },
    
    {
        name: 'STR Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[STR\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'DEX Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[DEX\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'QCK Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[QCK\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'PSY Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[PSY\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'INT Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[INT\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'TND Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[TND\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'RCV Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[RCV\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    /* * * * * Limit Break * * * * */
    
    {
        name: 'Has Limit Break',
        target: 'limit',
        matcher: /\S/i,
        icon: "pt-skill"
    },
    
    {
        name: 'Enrage Potential Ability',
        target: 'limit',
        matcher: /Enrage/i,
        icon: 'enrage'
    },
    
    {
        name: 'Reduce No Healing Potential Ability',
        target: 'limit',
        matcher: /Reduce No Healing/i,
        icon: 'reduce-anti-heal'
    },
    
    {
        name: 'Critical Hit Potential Ability',
        target: 'limit',
        matcher: /Critical Hit/i,
        icon: 'critical-hit'
    },
    
    {
        name: 'Slot Bind Self-reduction Potential Ability',
        target: 'limit',
        matcher: /Slot Bind Self-reduction/i,
        icon: 'slot-bind-reduction'
    },
    
    {
        name: 'Barrier Penetration Potential Ability',
        target: 'limit',
        matcher: /Barrier Penetration/i,
        icon: 'barrier-penetration'
    },
    
    {
        name: 'Pinch Healing Potential Ability',
        target: 'limit',
        matcher: /Pinch Healing/i,
        icon: 'pinch-healing'
    },
    
    {
        name: 'Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /Damage Reduction/i,
        icon: 'dif-str'
    },
    
    {
        name: 'Cooldown Reduction Potential Ability',
        target: 'limit',
        matcher: /Cooldown Reduction/i,
        icon: 'reduction-cd'
    },
    
    {
        name: 'STR Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /\[STR\] Damage Reduction/i,
        icon: 'dif-str'
    },

    {
        name: 'DEX Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /\[DEX\] Damage Reduction/i,
        icon: 'dif-dex'
    },
    
    {
        name: 'QCK Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /\[QCK\] Damage Reduction/i,
        icon: 'dif-qck'
    },
    
    {
        name: 'PSY Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /\[PSY\] Damage Reduction/i,
        icon: 'dif-psy'
    },
    
    {
        name: 'INT Damage Reduction Potential Ability',
        target: 'limit',
        matcher: /\[INT\] Damage Reduction/i,
        icon: 'dif-int'
    },

];
