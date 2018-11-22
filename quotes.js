const quotes = [
  {
    content: 'Waste no more time debating what a good man should be, just be one.',
    reference: 'The Meditations, 10.16',
    author: 'Marcus Aurelius'
  },
  {
    content: 'At daybreak, when you are reluctant to rise from bed, have this thought ready in your mind: “I am rising to do the work of a human being. Am I still irritable about doing that for which I was born and came into this world? Or was I made for this, that I should nuzzle under the bedclothes and keep warm?',
    reference: 'The Meditations, 5.1',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Men seek out retreats for themselves in the country, by the seaside, on the mountains… Nowhere can a man find a retreat more peaceful or more free from trouble than his own soul.',
    reference: 'The Meditations, 4.3',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Be like a headland of rock against which the waves continually break. It stands fast nevertheless and around it the crashing waters come to rest.',
    reference: 'The Meditations, 4.49',
    author: 'Marcus Aurelius'
  },
  {
    content: 'In but a short while you shall be ashes, or a few dry bones, and possibly just a name, or not even a name.',
    reference: 'The Meditations, 5.33',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Watch the stars in their courses as one who runs alongside them and frequently contemplate the reciprocal transformations of elements, for thoughts such as these cleanse away the dross of earthbound life.',
    reference: 'The Meditations, 7.47',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Look within yourself. Within is the fountain of goodness, always ready to gush forth if you will always dig for it.',
    reference: 'The Meditations, 7.59',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The mind, unconquered by violent passions, is a citadel, for a man has no fortress more impregnable in which to find refuge and remain safe forever.',
    reference: 'The Meditations, 8.48',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The cucumber is bitter. Throw it away. There are brambles in the path. Turn aside. That’s enough. You don’t need to add “Why are such things found in the world?”',
    reference: 'The Meditations, 8.50',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Take a bird’s-eye view of the world: it\'s endless gatherings and endless ceremonies, many journeys in both storm and calm, and the transformations of things coming to be, existing, and ceasing to be.',
    reference: 'The Meditations, 9.30',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Everything has two handles. One by which it can be carried and another by which it cannot.',
    reference: 'Enchiridion, 43',
    author: 'Epictetus'
  },
  {
    content: 'Some things are up to us and other are not… Remember, therefore, that if what is naturally slavish you take to be free, and what is not your own to be your own, you will be obstructed, grieve, be distressed, and will blame both gods and men...',
    reference: 'Enchiridion, 1',
    author: 'Epictetus'
  },
  {
    content: 'Never to say of anything "I have lost it" but that you have given it back.',
    reference: 'Enchiridion, 11',
    author: 'Epictetus'
  },
  {
    content: 'Do not wish for events to turn out as you desire but rather wish for them to happen as they do and your life will go smoothly. ',
    reference: 'Enchiridion, 8',
    author: 'Epictetus'
  },
  {
    content: 'People are not disturbed by events, but by their judgements about events. ',
    reference: 'Enchiridion, 5',
    author: 'Epictetus'
  },
  {
    content: 'If the room is smoky, but only moderately, I will stay. If there is too much smoke I will go. Remember this, and keep a firm grasp of it, the door is always open.',
    reference: 'Discourses, 1.25',
    author: 'Epictetus'
  },
  {
    content: 'For it is neither death nor pain that is to be feared but rather the fear of pain or death.',
    reference: 'Discourses, 2.1',
    author: 'Epictetus'
  },
  {
    content: 'A person untrained in philosophy blames others when he fares badly. One whose education has commenced blamed himself. One whose education is already complete blames neither another nor himself.',
    reference: 'Enchiridion, 5',
    author: 'Epictetus'
  },
  {
    content: 'Disease is a hindrance to the body but not to the will unless it consents. Lameness is a hindrance to the leg but not the will. And say this to yourself with each thing that befalls you for you will find the thing to be a hindrance to something else, but not to yourself.',
    reference: 'Enchiridion, 9',
    author: 'Epictetus'
  },
  {
    content: 'With regard to everything that befalls you, remember to look to yourself and see what faculty you have to deal with it.',
    reference: 'Enchiridion, 10',
    author: 'Epictetus'
  },
  {
    content: 'If someone handed your body over to anyone you met, you would be upset. Yet you hand over your mind to anyone who comes along, so that if he criticises you then you are distressed and troubled – are you not ashamed of that?',
    reference: 'Enchiridion, 28',
    author: 'Epictetus'
  },
  {
    content: 'When you are about to meet someone, particularly when it is one of those held in very high esteem, ask yourself: “What would Socrates or Zeno have done in this situation?” and you will not be at a loss regarding how to act on that occasion.',
    reference: 'Enchiridion, 33',
    author: 'Epictetus'
  },
  {
    content: 'Everywhere means nowhere. When a person spends all his time in foreign travel, he ends by having many acquaintances, but no friends.',
    reference: 'Letters to Lucilius, 2',
    author: 'Seneca'
  },
  {
    content: 'You can tell the character of every man when you see how he gives and receives praise.',
    reference: 'Letters to Lucilius, 52',
    author: 'Seneca'
  },
  {
    content: 'Our plans miscarry because they have no aim. When a man does not know what harbour he is making for, no wind is the right wind.',
    reference: 'Letters to Lucilius, 71',
    author: 'Seneca'
  },
  {
    content: 'As long as you live, keep learning how to live.',
    reference: 'Letters to Lucilius, 76',
    author: 'Seneca'
  },
  {
    content: 'Two elements must therefore be rooted out once for all – the fear of future suffering, and the recollection of past suffering; since the latter no longer concerns me, and the former concerns me not yet.',
    reference: 'Letters to Lucilius, 78',
    author: 'Seneca'
  },
  {
    content: 'It does not matter what you bear, but how you bear it.',
    reference: 'On Providence, 2',
    author: 'Seneca'
  },
  {
    content: 'By looking forward to the coming of our sorrows we take the sting out of them when they come.',
    reference: 'Consolation to Marcia, 9',
    author: 'Seneca'
  },
  {
    content: 'I have applied myself to the society of wise men… They have ordered me always to stand as it were on guard, and to mark the attacks and charges of Fortune long before she delivers them; she is only terrible to those whom she catches unawares; he who is always looking out for her assault, easily sustains it.',
    reference: 'Consolation to Helvia, 5',
    author: 'Seneca'
  },
  {
    content: 'The wise man, therefore, being tranquil, and dealing candidly with mistakes, not an enemy to but an improver of sinners, will go abroad every day in the following frame of mind: "Many men will meet me who are drunkards, lustful, ungrateful, greedy, and excited by the frenzy of ambition."',
    reference: 'On Anger, 2.10',
    author: 'Seneca'
  },
  {
    content: 'Do you ask what I seek from virtue? I answer, Herself: for she has nothing better; she is her own reward.',
    reference: 'On the Happy Life, 9',
    author: 'Seneca'
  },
];