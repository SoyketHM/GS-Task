import { Meteor } from 'meteor/meteor';
import { Subjects } from '../imports/collections/subjects';
import { assert } from 'chai';

if (Meteor.isServer) {
    describe('Student', () => {
        describe('methods', () => {
            beforeEach(() => {
                Subjects.remove({});
            });
            it('can delete owned student', () => {
                assert.equal(Subjects.find().count(), 0);
            });
        });
    });
}