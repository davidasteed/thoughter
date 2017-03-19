(function() {
  'use strict';

  let expect = window.chai.expect;

  describe('test suite for DOM-and-Ajax-Testing', function(){

    describe('showRecent function', function(){
      beforeEach(function(){
        // base fixture for all testing
        // create a new main element to which all elements will be attached
        let mainElement = document.createElement('main');
        document.querySelector('body').appendChild(mainElement);
        // add class 'recent' to the new main element
        document.querySelector('main').classList.add('recent');
      });

      afterEach(function(){
        // delete the base fixture
        let mainElement = document.querySelector('main');
        mainElement.parentNode.removeChild(mainElement);
      });

      // should verify if function returns (does nothing) if no array is provided
      it('should return (doing nothing) if no argument was provided', function (){
        window.thoughter.showRecent();
        let result = document.querySelector('article.panel-info');
        expect(result).to.be.null;
      });

      it('should verify if the function is really a function', function(){
        expect(window.thoughter.showRecent).is.a.function;
      });

      it('should check if main element exists, and has class "recent"', function(){
        let testVal = document.querySelector('main.recent');
        expect(testVal).to.be.ok; // truthy
      });

      it('should fail if content was not present in the array', function(){
        let testVal = [
          { id: '12345',
            creatTime: '12:13:56 on 7/13/96'}
        ];
        window.thoughter.showRecent(testVal);  // attempt to process the array
        let result = document.querySelector('article.panel-info');
        expect(result).to.be.null;
      });

      it('should fail if id was not present in the array', function(){
        let testVal = [
          { createTime: '14:11:06 on 11/5/14',
            content: 'I was thinking but not really'
          }
        ];
        window.thoughter.showRecent(testVal);  // attempt to process the array
        let result = document.querySelector('article.panel-info');
        expect(result).to.be.null;
      });

      it('should fail if createTime was not present in the array', function(){
        let testVal = [
          { id: '335122',
            content: 'I was thinking but not really'
          }
        ];
        window.thoughter.showRecent(testVal);  // attempt to process the array
        let result = document.querySelector('article.panel-info');
        expect(result).to.be.null;
      });

      // With one correct array element, should verify if
      // article was created and received class panel and panel-info,
      // and also received id attribute that ends with the correct value
      it('should create article with "panel panel-info" classes and id', function (){
        let testVal = [
          { id: '12345',
            createTime: '12:13:56 on 7/13/96',
            content: 'one thought added'
          }
        ];
        let idString = '12345';
      window.thoughter.showRecent(testVal);
      let result = document.querySelector('article[id$="12345"].panel.panel-info');
      expect(result).to.be.ok;
      });

      it('should verify header has class panel-heading and createTime content',
        function(){
          let testVal = [
            { id: '12345',
              createTime: '12:13:56 on 7/13/96',
              content: 'one thought added'
            }
          ];
          let createTime = '12:13:56 on 7/13/96';
          window.thoughter.showRecent(testVal);
          let result = document.querySelector('header.panel-heading').innerText;
          expect(result).to.equal('Posted ' + createTime);
        }
      );

      it('should verify if the p contains the content text', function(){
        let testVal = [
          { id: '12345',
            createTime: '12:13:56 on 7/13/96',
            content: 'one thought added'
          }
        ];
        let content = 'one thought added';
        window.thoughter.showRecent(testVal);
        let result = document.querySelector('p').innerText;
        expect(result).to.equal(content);
      });

      // should verify if the proper number of articles are created,
      //  if more than one is added
      it('should verify if function can handle two thoughts', function(){
        let testVal = [
          { id: '11111',
            createTime: '11:11:11 on 11/11/11',
            content: 'first thought added'
          },
          { id: '22222',
            createTime: '22:22:22 on 12/22/22',
            content: 'second thought added'
          },
        ];

        window.thoughter.showRecent(testVal);

        // the array returned by the NodeList must have exactly two elements
        let correctNumElements;
        let thisNodeList = document.querySelectorAll('article');
        let thisArray = Array.from(thisNodeList);
        let numElements = thisArray.length;

        if (numElements === 2) {
          correctNumElements = true;
        } else {
          correctNumElements = false;
        }

        // check if the objects have the expected id
        let correctIds;
        let correctIdPrefix = 'thought-';

        if (thisArray[0].id !== correctIdPrefix + '11111') {
          correctIds = false;
        } else if (thisArray[1].id !== correctIdPrefix + '22222') {
          correctIds = false;
        } else {
          correctIds = true;
        }

        let multiThoughtCheck;
        if (correctNumElements && correctIds) {
          multiThoughtCheck = true;
        } else {
          multiThoughtCheck = false;
        }

        expect(multiThoughtCheck).to.be.ok;
      });
  });

  describe('getRecent function', function(){
    // TODO:  rock out some Sinon virtual http server fetch/promise
  });

});


}());
