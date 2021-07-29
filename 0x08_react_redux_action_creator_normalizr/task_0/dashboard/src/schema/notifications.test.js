import { getAllNotificationsByUser } from './notifications';
import assert from 'assert';

const userId = '5debd764a7c57c7839d722e9';
describe ('Data is valid', () => {
    it('Verify Data', () => {
        const list = getAllNotificationsByUser(userId);
        assert.equal(typeof list, 'object');
        assert.equal(list.length, 2);

        const [first, second] = list;
        
        assert.equal(first.guid, "2d8e40be-1c78-4de0-afc9-fcc147afd4d2");
        assert.equal(first.isRead, true);
        assert.equal(first.type, "urgent");
        assert.equal(first.value, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

        assert.equal(second.guid, "280913fe-38dd-4abd-8ab6-acdb4105f922");
        assert.equal(second.isRead, false);
        assert.equal(second.type, "urgent");
        assert.equal(second.value, "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed");

    });
});
