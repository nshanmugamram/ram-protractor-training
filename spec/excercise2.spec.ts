"use strict";

import {UserSelector} from './user' ;
import {UserPage} from './user.page' ;

describe('Exercise1', function() { 
    beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise1');
  });

  it('should have heading Excercise 1, ', function() {  
    expect(UserPage.heading.getText()).toEqual('Exercise 1');
  });
  describe('should have Update Info,', function() {
      xit('should have sub heading Update Info,', function() {  
        expect(UserPage.subheading.getText()).toEqual('Update info');
      });   
      it('should have name,', function() {    
         expect(UserPage.updateSection.all(UserSelector.name1).getText()).toEqual('Bruce Lee');       
      });  
      xit('should have email,', function() {  
       expect( UserPage.updateSection.getWebElement().findElement(UserSelector.email).getText()).toEqual('bruce.lee@google.com');     
      });  
      xit('should have phone,', function() {  
        expect( UserPage.updateSection.getWebElement().findElement(UserSelector.phone).getText()).toEqual('212 555-1234');     
      });   
  });

}); 