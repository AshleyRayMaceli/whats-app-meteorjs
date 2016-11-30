import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Steven Universe',
        picture: 'http://68.media.tumblr.com/5b8fd0f888b9c0900f900eeed378102b/tumblr_o2xl0ls16u1uw74fvo8_540.png',
        lastMessage: {
          text: 'If every porkchop were perfect we wouldn\'t have hot dogs!',
          timestamp: Moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: 1,
        name: 'Garnet',
        picture: 'http://68.media.tumblr.com/20a0822ae727cb218315ae3c61aaf6c7/tumblr_o0wz6zhTnC1uw74fvo1_250.png',
        lastMessage: {
          text: 'Big fan of Fusion over here.',
          timestamp: Moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: 2,
        name: 'Amethyst',
        picture: 'http://68.media.tumblr.com/a9d6c961b2d50d4d490dd72918adfdd0/tumblr_nrrgo5PlB91uw74fvo5_250.png',
        lastMessage: {
          text: 'Where\'s the food??',
          timestamp: Moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: 3,
        name: 'Pearl',
        picture: 'http://68.media.tumblr.com/db06d23d92f257f0fc40bbe4b5a614e2/tumblr_o2m7v8YeW31uw74fvo7_1280.png',
        lastMessage: {
          text: 'Time for sword training!',
          timestamp: Moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: 4,
        name: 'Peridot',
        picture: 'http://68.media.tumblr.com/568a141b3ccab7d95ca4e431e0e14f15/tumblr_o0wyvkR9Wu1uw74fvo2_250.png',
        lastMessage: {
          text: 'The new episode of Camp Pining Hearts is on!! :3',
          timestamp: Moment().subtract(2, 'weeks').toDate()
        }
      }
    ];
  }

  remove(chat) {
    this.data.splice(this.data.indexOf(chat), 1);
  }
}

ChatsCtrl.$name = 'ChatsCtrl';
