import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function(){
  if (Chats.find().count() !== 0) return;

  Messages.remove({});

  const messages = [
    {
      text: 'If every porkchop were perfect we wouldn\'t have hot dogs!',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Big fan of Fusion over here.',
      timestamp: Moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'Where\'s the food??',
      timestamp: Moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Time for sword training!',
      timestamp: Moment().subtract(4, 'days').toDate()
    },
    {
      text: 'The new episode of Camp Pining Hearts is on!! :3',
      timestamp: Moment().subtract(2, 'weeks').toDate()
    }
  ];

  messages.forEach((m) => {
    Messages.insert(m);
  });

  const chats = [
    {
      name: 'Steven Universe',
      picture: 'http://68.media.tumblr.com/5b8fd0f888b9c0900f900eeed378102b/tumblr_o2xl0ls16u1uw74fvo8_540.png'
    },
    {
      name: 'Garnet',
      picture: 'http://68.media.tumblr.com/20a0822ae727cb218315ae3c61aaf6c7/tumblr_o0wz6zhTnC1uw74fvo1_250.png'
    },
    {
      name: 'Amethyst',
      picture: 'http://68.media.tumblr.com/a9d6c961b2d50d4d490dd72918adfdd0/tumblr_nrrgo5PlB91uw74fvo5_250.png'
    },
    {
      name: 'Pearl',
      picture: 'http://68.media.tumblr.com/db06d23d92f257f0fc40bbe4b5a614e2/tumblr_o2m7v8YeW31uw74fvo7_1280.png'
    },
    {
      name: 'Peridot',
      picture: 'http://68.media.tumblr.com/568a141b3ccab7d95ca4e431e0e14f15/tumblr_o0wyvkR9Wu1uw74fvo2_250.png'
    }
  ];

  chats.forEach((chat) => {
    const message = Messages.findOne({ chatId: { $exists: false } });
    chat.lastMessage = message;
    const chatId = Chats.insert(chat);
    Messages.update(message._id, { $set: {chatId} });
  });
});
