# mocha
* simple, flexible, fun Test Framework for Node.js
* 테스트 프레임워크는 테스트의 접근방식에서 크게 TDD와 BDD로 나눌 수 있다.    

> ※ BDD 와 TDD 의 차이
   BDD (Behaviour-Driven Development), TDD (Test-Driven Development)
   TDD를 처음 접하는 사람의 오해를 덜어주고 초심자가 TDD를 더 빨리 익힐 수 있도록 하자는 취지에서 ThoughtWorks(리팩토링 책의 저자인 Martin Fowler의 회사)의 Dan North에 의해 탄생.
   TDD는 테스트 자체에 집중하여 개발하는 반면, BDD 는 비지니스 요구 사항에 집중하여 테스트 케이스를 개발한다는 것이다. (무슨 소리??)
   BDD는 테스트 케이스를 작성함에 있어서 좀 더 자연어에 가깝게 작성한다는 것이다. (자바스크립트를 위한 BDD 프레임워크인 JSSpec도 있다.)

### BDD Style
``` javascript
describe('BDD style', function() {
  before(function() {
    // excuted before test suite
  });

  after(function() {
    // excuted after test suite
  });

  beforeEach(function() {
    // excuted before every test
  });

  afterEach(function() {
    // excuted after every test
  });
  
  describe('#example', function() {
    it('this is a test.', function() {
      // write test logic
    });
  });
});
```

### TDD Style
``` javascript
suite('TDD Style', function() {
  suiteSetup(function() {
    // excuted before test suite 
  });

  suiteTeardown(function() {
    // excuted after test suite 
  });

  setup(function() {
    // excuted before every test 
  });

  teardown(function() {
    // excuted before every test 
  });

  suite('#example', function() {
    test('this is a test', function() {
      // write test logic
    });
  });
});
```

### 실행
mocha는 기본적으로 test 디렉토리 아래에 있는 파일을 실행한다.
``` unix
$ mocha
```

### Reporters
출력되는 결과를 다양한 포맷으로 출력 가능
``` unix
$ mocha --reporter spec
$ mocha --reporter doc
$ mocha --reporter json
```

# Chai
* Chai is a BDD/TDD assertion library.
* Chai aims to be expressive and easily approachable way to write assertion for Javascript project testing.


   
### Assertion Style
* expect
* sholud
* assert
``` javascript
	var chai = require('chai')
		, foo = 'bar'
		, beverages = { tea: [ 'rooibos', 'matcha', 'oolong' ] }; 
  
	// TDD Style (assert) 
	var assert = chai.assert;
	assert.equal(foo, 'bar', 'Foo equal bar');
	assert.length(beverages.tea, 3, 'We have three types of tea');
  
  
	// BDD Style (expect, should)
	var expect = chai.expect;
	expect(foo).to.be.a('string').and.equal('bar');
	expect(beverages).to.have.property('tea').with.length(3);
	
	var should = chai.should();
	foo.should.be.a('string').and.equal('bar');
	beverages.should.have.property('tea').with.length(3);
```	
### Expending Chai with Plugins
``` javascript
	var chai = require('chai')
	, spies = require('chai-spies');

	chai.use(spies);

	var should = chai.should()
	, myspy = chai.spy(originalFn); // originalFn not required

	eventemitter.on('some event', myspy);
	// ... testing
	myspy.should.have.been.called.twice;
````