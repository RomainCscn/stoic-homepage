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
    content: 'It is essential for you to remember that the attention you give to any action should be in due proportion to its worth, for then you won’t tire and give up, if you aren’t busying yourself with lesser things beyond what should be allowed.',
    reference: 'Meditations, 4.32b',
    author: 'Marcus Aurelius'
  },
  {
    content: 'What if someone despises me? Let them see to it. But I will see to it that I won’t be found doing or saying anything contemptible. What if someone hates me? Let them see to that. But I will see to it that I’m kind and good-natured to all, and prepared to show even the hater where they went wrong. Not in a critical way, or to show off my patience, but genuinely and usefully.',
    reference: 'Meditations, 11.13',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Remember that to change your mind and to follow someone’s correction are consistent with a free will. For the action is yours alone—to fulfill its purpose in keeping with your impulse and judgment, and yes, with your intelligence.',
    reference: 'Meditations, 11.13',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The person who does wrong, does wrong to themselves. The unjust person is unjust to themselves—making themselves evil.',
    reference: 'Meditations, 9.4',
    author: 'Marcus Aurelius'
  },
  {
    content: 'The best way to avenge yourself is to not be like that.',
    reference: 'Meditations, 6.6',
    author: 'Marcus Aurelius'
  },
  {
    content: 'There’s nothing worse than a wolf befriending sheep. Avoid false friendship at all costs. If you are good, straightforward, and well meaning it should show in your eyes and not escape notice.',
    reference: 'Meditations, 11.15',
    author: 'Marcus Aurelius'
  },
  {
    content: 'There is no evil in things changing, just as there is no good in persisting in a new state.',
    reference: 'Meditations, 4.42',
    author: 'Marcus Aurelius'
  },
  {
    content: 'When you are distressed by an external thing, it’s not the thing itself that troubles you, but only your judgment of it. And you can wipe this out at a moment’s notice.',
    reference: 'Meditations, 8.47',
    author: 'Marcus Aurelius'
  },
  {
    content: 'If someone is slipping up, kindly correct them and point out what they missed. But if you can’t, blame yourself—or no one.',
    reference: 'Meditations, 10.4',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Let each thing you would do, say or intend be like that of a dying person.',
    reference: 'Meditations, 2.11.1',
    author: 'Marcus Aurelius'
  },
  {
    content: 'Think of the whole universe of matter and how small your share. Think about the expanse of time and how brief—almost momentary—the part marked for you. Think of the workings of fate and how infinitesimal your role.',
    reference: 'Meditations, 5.24',
    author: 'Marcus Aurelius'
  },
  {
    content: 'It’s a disgrace in this life when the soul surrenders first while the body refuses to.',
    reference: 'Meditations, 6.29',
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
    content: 'Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.',
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
    content: 'You can bind up my leg, but not even Zeus has the power to break my freedom of choice.',
    reference: 'Discourses, 1.1.23',
    author: 'Epictetus'
  },
  {
    content: 'Consider who you are. Above all, a human being, carrying no greater power than your own reasoned choice, which oversees all other things, and is free from any other master.',
    reference: 'Discourses, 2.10.1',
    author: 'Epictetus'
  },
  {
    content: 'Don’t trust in your reputation, money, or position, but in the strength that is yours—namely, your judgments about the things that you control and don’t control. For this alone is what makes us free and unfettered, that picks us up by the neck from the depths and lifts us eye to eye with the rich and powerful.',
    reference: 'Discourses, 3.26.34–35',
    author: 'Epictetus'
  },
  {
    content: 'In short, you must remember this—that if you hold anything dear outside of your own reasoned choice, you will have destroyed your capacity for choice.',
    reference: 'Discourses, 4.4.23',
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
    content: 'Many times an old man has no other evidence besides his age to prove he has lived a long time.',
    reference: 'On tranquility of mind, 3.8b',
    author: 'Seneca'
  },
  {
    content: 'Silence is a lesson learned from the many sufferings of life.',
    reference: 'Thyestes, 309',
    author: 'Seneca'
  },
  {
    content: 'It’s ruinous for the soul to be anxious about the future and miserable in advance of misery, engulfed by anxiety that the things it desires might remain its own until the very end. For such a soul will never be at rest—by longing for things to come it will lose the ability to enjoy present things.',
    reference: 'Moral letters, 98.5b–6a',
    author: 'Seneca'
  },
  {
    content: 'Therefore, explain why a wise person shouldn’t get drunk—not with words, but by the facts of its ugliness and offensiveness. It’s most easy to prove that so-called pleasures, when they go beyond proper measure, are but punishments.',
    reference: 'Moral letters, 83.27',
    author: 'Seneca'
  },
  {
    content: 'No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.',
    reference: 'Moral letters, 123.3',
    author: 'Seneca'
  },
  {
    content: '“Let us prepare our minds as if we’d come to the very end of life. Let us postpone nothing. Let us balance life’s books each day. . . . The one who puts the finishing touches on their life each day is never short of time.',
    reference: 'Moral letters, 101.7b–8a',
    author: 'Seneca'
  },
  {
    content: 'The rational soul is stronger than any kind of fortune—from its own share it guides its affairs here or there, and is itself the cause of a happy or miserable life.',
    reference: 'Moral letters, 98.2b',
    author: 'Seneca'
  },
  {
    content: 'It’s better to conquer grief than to deceive it.',
    reference: 'Consolation to Helvia, 17.1b',
    author: 'Seneca'
  },
  {
    content: 'Leisure without study is death—a tomb for the living person',
    reference: 'Moral letters, 82.4',
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
    content: 'How much better is it to be known for doing well by many than for living extravagantly? How much more worthy than spending on sticks and stones is it to spend on people.',
    reference: 'Lectures, 19.91.26–28',
    author: 'Musonius Rufus'
  },
  {
    content: 'As for me, I would choose being sick over living in luxury, for being sick only harms the body, whereas luxury destroys both the body and the soul, causing weakness and incapacity in the body, and lack of control and cowardice in the soul. What’s more, luxury breeds injustice because it also breeds greediness.',
    reference: 'Lectures, 20.95.14–17',
    author: 'Musonius Rufus'
  },
];