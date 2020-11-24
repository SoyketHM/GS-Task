import { Meteor } from 'meteor/meteor';
import { Students } from '../imports/collections/students';
import { assert } from 'chai';

let studentId;
if (Meteor.isServer) {
    describe('Students test cases', () => {
        describe('methods', () => {
            beforeEach(() => {
                Students.remove({});
            });
            it('can delete owned student', () => {
                assert.equal(Students.find().count(), 0);
            });
        });

        describe('insert subject', () => {
            beforeEach(() => {
                studentId = Students.insert({
                    dob: "1994-01-26",
                    name: "Belayet",
                    email: "belayet@gmail.com",
                    phone: "12345677890",
                    Students: ['Bangla', 'Math'],
                    createdAt: new Date(),
                });
            });
            it('can create subject', () => {
                assert.equal(Students.find().count(), 1);
            });
        });
        describe('update subject', () => {
            beforeEach(() => {
                Students.update(studentId, {
                    $set: {
                        dob: "1994-01-26",
                        name: "Belayet Hossain",
                        email: "belayet@gmail.com",
                        phone: "12345677890",
                        Students: ['Bangla', 'Math', 'English'],
                        updatedAt: new Date(),
                    },
                });
            });
            it('can update subject', () => {
                assert.equal(Students.find().count(), 1);
            });
        });
        describe('delete subject', () => {
            beforeEach(() => {
                Students.remove(studentId);
            });
            it('can delete subject', () => {
                assert.equal(Students.find().count(), 0);
            });
        });
    });
}