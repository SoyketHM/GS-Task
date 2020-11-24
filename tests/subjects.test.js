import { Meteor } from 'meteor/meteor';
import { Subjects } from '../imports/collections/subjects';
import { assert } from 'chai';

let subjectId;
if (Meteor.isServer) {
    describe('Subjects test cases', () => {
        describe('delete all subjects', () => {
            beforeEach(() => {
                Subjects.remove({});
            });
            it('can delete owned subject', () => {
                assert.equal(Subjects.find().count(), 0);
            });
        });
        describe('insert subject', () => {
            beforeEach(() => {
                subjectId = Subjects.insert({
                    name: 'Bangla',
                    students: ['belayet', 'asik'],
                    createdAt: new Date(),
                });
            });
            it('can create subject', () => {
                assert.equal(Subjects.find().count(), 1);
            });
        });
        describe('update subject', () => {
            beforeEach(() => {
                Subjects.update(subjectId, {
                    $set: {
                        name: 'Bangla',
                        students: ['belayet', 'asif'],
                        updatedAt: new Date(),
                    },
                  });
            });
            it('can update subject', () => {
                assert.equal(Subjects.find().count(), 1);
            });
        });
        describe('delete subject', () => {
            beforeEach(() => {
                Subjects.remove(subjectId);
            });
            it('can delete subject', () => {
                assert.equal(Subjects.find().count(), 0);
            });
        });
    });
}