import { Meteor } from 'meteor/meteor';
import { Students } from '../imports/collections/students';
import { assert } from 'chai';

if (Meteor.isServer) {
    describe('Student', () => {
        describe('methods', () => {
            beforeEach(() => {
                Students.remove({});
                // studentId = Students.insert({
                //     dob: "1994-01-26",
                //     name: "Belayet",
                //     email: "belayet@gmail.com",
                //     phone: "12345677890",
                //     subjects: ['Bangla', 'Math'],
                //     createdAt: new Date(),
                // });
            });
            it('can delete owned student', () => {
                assert.equal(Students.find().count(), 0);
            });
        });
    });
}