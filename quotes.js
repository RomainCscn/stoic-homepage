const quotes = [
  {
    content: 'Waste no more time debating what a good man should be, just be one.',
    reference: 'Meditations, 10.16',
    author: 'Marcus Aurelius'
  },
  {
    content: 'At daybreak, when you are reluctant to rise from bed, have this thought ready in your mind: “I am rising to do the work of a human being. Am I still irritable about doing that for which I was born and came into this world? Or was I made for this, that I should nuzzle under the bedclothes and keep warm?',
    reference: 'Meditations, 5.1',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Men seek out retreats for themselves in the country, by the seaside, on the mountains… Nowhere can a man find a retreat more peaceful or more free from trouble than his own soul.',
    reference: 'Meditations, 4.3',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Be like a headland of rock against which the waves continually break. It stands fast nevertheless and around it the crashing waters come to rest.',
    reference: 'Meditations, 4.49',
    author: 'Marcus Aurelius'
  },
  {
    content: 'In but a short while you shall be ashes, or a few dry bones, and possibly just a name, or not even a name.',
    reference: 'Meditations, 5.33',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Watch the stars in their courses as one who runs alongside them and frequently contemplate the reciprocal transformations of elements, for thoughts such as these cleanse away the dross of earthbound life.',
    reference: 'Meditations, 7.47',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Look within yourself. Within is the fountain of goodness, always ready to gush forth if you will always dig for it.',
    reference: 'Meditations, 7.59',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The mind, unconquered by violent passions, is a citadel, for a man has no fortress more impregnable in which to find refuge and remain safe forever.',
    reference: 'Meditations, 8.48',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The cucumber is bitter. Throw it away. There are brambles in the path. Turn aside. That’s enough. You don’t need to add “Why are such things found in the world?”',
    reference: 'Meditations, 8.50',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Take a bird’s-eye view of the world: it\'s endless gatherings and endless ceremonies, many journeys in both storm and calm, and the transformations of things coming to be, existing, and ceasing to be.',
    reference: 'Meditations, 9.30',
    author: 'Marcus Aurelius'
  },
  {
    content: 'All you need are these: certainty of judgment in the present moment; action for the common good in the present moment; and an attitude of gratitude in the present moment for anything that comes your way.',
    reference: 'Meditations, 9.6',
    author: 'Marcus Aurelius'
  },
  {
    content: 'From Rusticus... I learned to read carefully and not be satisfied with a rough understanding of the whole, and not to agree too quickly with those who have a lot to say about something.',
    reference: 'Meditations, 1.7.3',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Frame your thoughts like this—you are an old person, you won’t let yourself be enslaved by this any longer, no longer pulled like a puppet by every impulse, and you’ll stop complaining about your present fortune or dreading the future.',
    reference: 'Meditations, 2.2',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Whenever someone has done wrong by you, immediately consider what notion of good or evil they had in doing it. For when you see that, you’ll feel compassion, instead of astonishment or rage. For you may yourself have the same notions of good and evil, or similar ones, in which case you’ll make an allowance for what they’ve done. But if you no longer hold the same notions, you’ll be more readily gracious for their error.”',
    reference: 'Meditations, 7.26',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Your mind will take the shape of what you frequently hold in thought, for the human spirit is colored by such impressions',
    reference: 'Meditations, 5.16',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Pay close attention in conversation to what is being said, and to what follows from any action. In the action, immediately look for the target, in words, listen closely to what’s being signaled.',
    reference: 'Meditations, 6.21',
    author: 'Marcus Aurelius'
  },
  {
    content: 'If anyone can prove and show to me that I think and act in error, I will gladly change it—for I seek the truth, by which no one has ever been harmed. The one who is harmed is the one who abides in deceit and ignorance.',
    reference: 'Meditations, 7.4',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Don’t set your mind on things you don’t possess as if they were yours, but count the blessings you actually possess and think how much you would desire them if they weren’t already yours. But watch yourself, that you don’t value these things to the point of being troubled if you should lose them.',
    reference: 'Meditations, 7.27',
    author: 'Marcus Aurelius'
  },
  {
    content: 'I’m constantly amazed by how easily we love ourselves above all others, yet we put more stock in the opinions of others than in our own estimation of self. How much credence we give to the opinions our peers have of us and how little to our very own!',
    reference: 'Meditations, 12.4',
    author: 'Marcus Aurelius'
  },
  {
    content: 'What is your vocation? To be a good person.',
    reference: 'Meditations, 11.5',
    author: 'Marcus Aurelius'
  },
  {
    content: 'How beautifully Plato put it. Whenever you want to talk about people, it’s best to take a bird’s-eye view and see everything all at once—of gatherings, armies, farms, weddings and divorces, births and deaths, noisy courtrooms or silent spaces, every foreign people, holidays, memorials, markets—all blended together and arranged in a pairing of opposites.',
    reference: 'Meditations, 7.48',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Don’t be ashamed of needing help. You have a duty to fulfill just like a soldier on the wall of battle. So what if you are injured and can’t climb up without another soldier’s help?',
    reference: 'Meditations, 7.7',
    author: 'Marcus Aurelius'
  },
  {
    content: 'In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.',
    reference: 'Meditations, 8.51',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Receive without pride, let go without attachment',
    reference: 'Meditations, 8.33',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Often injustice lies in what you aren’t doing, not only in what you are doing.',
    reference: 'Meditations, 9.5',
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
    content: 'Make it your practice to say to every harsh impression, ‘you are an impression and not at all what you appear to be.’ Next, examine and test it by the rules you possess, the first and greatest of which is this—whether it belongs to the things in our control or not in our control, and if the latter, be prepared to respond, ‘It is nothing to me.‘',
    reference: 'Enchiridion, 1.5',
    author: 'Epictetus'
  },
  {
    content: 'The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own',
    reference: 'Discourses, 2.5.4–5',
    author: 'Epictetus'
  },
  {
    content: 'What is the fruit of these teachings? Only the most beautiful and proper harvest of the truly educated—tranquility, fearlessness, and freedom. We should not trust the masses who say only the free can be educated, but rather the lovers of wisdom who say that only the educated are free.',
    reference: 'Discourses, 2.1.21–23a',
    author: 'Epictetus'
  },
  {
    content: 'Some things are in our control, while others are not. We control our opinion, choice, desire, aversion, and, in a word, everything of our own doing. We don’t control our body, property, reputation, position, and, in a word, everything not of our own doing. Even more, the things in our control are by nature free, unhindered, and unobstructed, while those not in our control are weak, slavish, can be hindered, and are not our own.',
    reference: 'Discourses, 2.6.25',
    author: 'Epictetus'
  },
  {
    content: 'The proper work of the mind is the exercise of choice, refusal, yearning, repulsion, preparation, purpose, and assent. What then can pollute and clog the mind’s proper functioning? Nothing but its own corrupt decisions.',
    reference: 'Discourses, 4.11.6–7',
    author: 'Epictetus'
  },
  {
    content: 'If you wish to improve, be content to appear clueless or stupid in extraneous matters—don’t wish to seem knowledgeable. And if some regard you as important, distrust yourself.',
    reference: 'Enchiridion, 13a',
    author: 'Epictetus'
  },
  {
    content: 'When I see an anxious person, I ask myself, what do they want? For if a person wasn’t wanting something outside of their own control, why would they be stricken by anxiety?',
    reference: 'Discourses, 2.13.1',
    author: 'Epictetus'
  },
  {
    content: 'Who then is invincible? The one who cannot be upset by anything outside their reasoned choice.',
    reference: 'Discourses, 1.18.21',
    author: 'Epictetus'
  },
  {
    content: 'Of all the things that are, some are good, others bad, and yet others indifferent. The good are virtues and all that share in them; the bad are the vices and all that indulge them; the indifferent lie in between virtue and vice and include wealth, health, life, death, pleasure, and pain.',
    reference: 'Discourses, 2.19.12b–13',
    author: 'Epictetus'
  },
  {
    content: 'In public avoid talking often and excessively about your accomplishments and dangers, for however much you enjoy recounting your dangers, it’s not so pleasant for others to hear about your affairs.',
    reference: 'Enchiridion, 33.14',
    author: 'Epictetus'
  },
  {
    content: 'It isn’t events themselves that disturb people, but only their judgments about them.',
    reference: 'Enchiridion, 5',
    author: 'Epictetus'
  },
  {
    content: 'There are two things that must be rooted out in human beings—arrogant opinion and mistrust. Arrogant opinion expects that there is nothing further needed, and mistrust assumes that under the torrent of circumstance there can be no happiness.',
    reference: 'Discourses, 3.14.8',
    author: 'Epictetus'
  },
  {
    content: 'Those who receive the bare theories immediately want to spew them, as an upset stomach does its food. First digest your theories and you won’t throw them up. Otherwise they will be raw, spoiled, and not nourishing. After you’ve digested them, show us the changes in your reasoned choices, just like the shoulders of gymnasts display their diet and training, and as the craft of artisans show in what they’ve learned.',
    reference: 'Discourses, 3.21.1–3',
    author: 'Epictetus'
  },
  {
    content: 'That’s why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should.',
    reference: 'Discourses, 2.9.13–14',
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
  {
    content: 'We must give up many things to which we are addicted, considering them to be good. Otherwise, courage will vanish, which should continually test itself. Greatness of soul will be lost, which can’t stand out unless it disdains as petty what the mob regards as most desirable.',
    reference: 'Moral letters, 74.12b–13',
    author: 'Seneca'
  },
  {
    content: 'I will keep constant watch over myself and—most usefully—will put each day up for review. For this is what makes us evil—that none of us looks back upon our own lives. We reflect upon only that which we are about to do. And yet our plans for the future descend from the past.',
    reference: 'Moral letters, 83.2',
    author: 'Seneca'
  },
  {
    content: 'Let’s pass over to the really rich—how often the occasions they look just like the poor! When they travel abroad they must restrict their baggage, and when haste is necessary, they dismiss their entourage. And those who are in the army, how few of their possessions they get to keep...',
    reference: 'On Consolation to Helvia, 12. 1.b–2',
    author: 'Seneca'
  },
  {
    content: 'Many are harmed by fear itself, and many may have come to their fate while dreading fate.',
    reference: 'Oedipus, 992',
    author: 'Seneca'
  },
  {
    content: 'Nothing will ever befall me that I will receive with gloom or a bad disposition. I will pay my taxes gladly. Now, all the things which cause complaint or dread are like the taxes of life—things from which, my dear Lucilius, you should never hope for exemption or seek escape.',
    reference: 'Moral letters, 96.2',
    author: 'Seneca'
  },
  {
    content: 'Show me that the good life doesn’t consist in its length, but in its use, and that it is possible—no, entirely too common—for a person who has had a long life to have lived too little.',
    reference: 'Moral letters, 49.10b',
    author: 'Seneca'
  },
  {
    content: 'We like to say that we don’t get to choose our parents, that they were given by chance—yet we can truly choose whose children we’d like to be.',
    reference: 'On the brevity of life, 15.3a',
    author: 'Seneca'
  },
  {
    content: 'We should take wandering outdoor walks, so that the mind might be nourished and refreshed by the open air and deep breathing.',
    reference: 'On tranquility of mind, 17.8',
    author: 'Seneca'
  },
  {
    content: 'Silence is a lesson learned from the many sufferings of life.',
    reference: 'Thyestes, 309',
    author: 'Seneca'
  },
  {
    content: 'From good people you’ll learn good, but if you mingle with the bad you’ll destroy such soul as you had.',
    reference: 'Lectures, 11.53.21-22',
    author: 'Musonius Rufus'
  },
  {
    content: 'For philosophy doesn’t consist in outward display, but in taking heed to what is needed and being mindful of it.',
    reference: 'Lectures, 16.75.15–16',
    author: 'Musonius Rufus'
  },
  {
    content: 'How much better is it to be known for doing well by many than for living extravagantly? How much more worthy than spending on sticks and stones is it to spend on people',
    reference: 'Lectures, 19.91.26–28',
    author: 'Musonius Rufus'
  },
];