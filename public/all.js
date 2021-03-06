"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('About component');
(function () {
  var AboutComponent = function (_React$Component) {
    _inherits(AboutComponent, _React$Component);

    function AboutComponent() {
      _classCallCheck(this, AboutComponent);

      return _possibleConstructorReturn(this, (AboutComponent.__proto__ || Object.getPrototypeOf(AboutComponent)).apply(this, arguments));
    }

    _createClass(AboutComponent, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.HeaderComponent, null),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              null,
              " About LAURA"
            ),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                "Uses: "
              ),
              React.createElement(
                "p",
                null,
                "Users can record themselves in their Native Language and compare it to the language they wish to learn. The users can then down load their recordings and share them with other learners or language mentors"
              ),
              React.createElement(
                "li",
                null,
                "Features:"
              ),
              React.createElement(
                "p",
                null,
                "LAURA uses accessible features ensure all users have means to communicate. LAURA also emphasizes the importance of self-analysis to truly understand your own communication needs."
              ),
              React.createElement(
                "li",
                null,
                "Inspiration:"
              ),
              React.createElement(
                "p",
                null,
                "Inspired by a local Sign Language Interpreter and her desire to advance her skill through accessible language."
              ),
              React.createElement(
                "li",
                null,
                "Code:"
              ),
              React.createElement(
                "p",
                { className: "code-paragraph" },
                "The code for Laura can be found on ",
                React.createElement(
                  "a",
                  { href: "https://github.com/chelsey-wiley/laura-app", target: "_blank" },
                  "GitHub"
                ),
                "."
              ),
              React.createElement(
                "li",
                null,
                "Directions:"
              ),
              React.createElement(
                "p",
                null,
                "Click on the language you wish to practice. Check to confirm that your browswer is compatable by clicking support. Begin recording. When finished click stop. You may play back your sample or download it to your computer."
              )
            )
          )
        );
      }
    }]);

    return AboutComponent;
  }(React.Component);

  MR.AboutComponent = AboutComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('English component');
(function () {
  var EnglishComponent = function (_React$Component) {
    _inherits(EnglishComponent, _React$Component);

    function EnglishComponent() {
      _classCallCheck(this, EnglishComponent);

      return _possibleConstructorReturn(this, (EnglishComponent.__proto__ || Object.getPrototypeOf(EnglishComponent)).apply(this, arguments));
    }

    _createClass(EnglishComponent, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(MR.RecordingComponent, null)
        );
      }
    }]);

    return EnglishComponent;
  }(React.Component);

  MR.EnglishComponent = EnglishComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var constraints = {
    "video": false,
    "audio": true
  };

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function (stream) {
    return stream;
  };

  var EnglishRecordingComponent = function (_React$Component) {
    _inherits(EnglishRecordingComponent, _React$Component);

    function EnglishRecordingComponent() {
      _classCallCheck(this, EnglishRecordingComponent);

      return _possibleConstructorReturn(this, (EnglishRecordingComponent.__proto__ || Object.getPrototypeOf(EnglishRecordingComponent)).apply(this, arguments));
    }

    _createClass(EnglishRecordingComponent, [{
      key: "error",
      value: function error() {
        console.log('error');
      }
    }, {
      key: "clickSupport",
      value: function clickSupport() {
        console.log('clicked support');
        if (navigator.getUserMedia === null) {
          alert('Sorry! This will not work on your browser.');
          console.log('no support');
        } else {
          console.log('has support');
        }
      }
    }, {
      key: "getStream",
      value: function getStream(stream) {
        var videoStream = stream;
        video.src = createSrc(stream);
        video.play();
      }
    }, {
      key: "clickRec",
      value: function clickRec() {
        var _this2 = this;

        navigator.getUserMedia(constraints, function (stream) {
          _this2.theRecording(stream);
        }, this.error);
        console.log('clicked record');
      }
    }, {
      key: "theRecording",
      value: function theRecording(stream) {
        console.log('startRecording function');
        this.getStream(stream);
        var mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder = mediaRecorder;
        if (this.mediaRecorder.state !== 'recording') {
          console.log('Created MediaRecorder', mediaRecorder);
          this.mediaRecorder.start();
          console.log('MediaRecorder state:', this.mediaRecorder.state);
          this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        }
      }
    }, {
      key: "handleDataAvailable",
      value: function handleDataAvailable(stream) {
        if (this.recordedBlobs === undefined) {
          this.recordedBlobs = [];
        };
        if (stream.data && stream.data.size > 0) {
          this.recordedBlobs.push(stream.data);
        }
      }
    }, {
      key: "clickStop",
      value: function clickStop() {
        console.log('clicked stop');
        this.mediaRecorder.stop();
        console.log("recorder stopped");
        console.log('mediaRecorder state:', this.mediaRecorder.state);
        console.log("the blobs", this.mediaRecorder.recordedBlobs);
        var superBlob = new Blob(this.mediaRecorder.recordedBlobs, { type: 'video/webm' });
        this.superBlob = superBlob;
        console.log('superBlob:', this.superBlob);
      }
    }, {
      key: "clickPlay",
      value: function clickPlay() {
        console.log('clicked play');
        video.src = window.URL.createObjectURL(this.superBlob);
      }
    }, {
      key: "clickDownload",
      value: function clickDownload() {
        console.log('clicked download');

        var url = window.URL.createObjectURL(this.superBlob);
        var a = document.createElement('a');
        // a.style.display = 'none';
        a.href = url;
        a.download = 'SignLanguageVideo.webm';
        document.body.appendChild(a);
        a.click();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var videoStream = null;
        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.HeaderComponent, null),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              null,
              "English Recording"
            ),
            React.createElement(
              "p",
              null,
              "English is spoken an written. It has many nuances that make it a challenge to learn."
            ),
            React.createElement(
              "p",
              null,
              "*This will have no video"
            ),
            React.createElement(
              "div",
              { className: "recorder-container" },
              React.createElement("video", { id: "video", controls: true, autoPlay: true }),
              React.createElement(
                "div",
                { className: "video-buttons" },
                React.createElement(
                  "button",
                  { id: "supported", onClick: function onClick() {
                      _this3.clickSupport();
                    } },
                  "Support"
                ),
                React.createElement(
                  "button",
                  { id: "record", onClick: function onClick() {
                      _this3.clickRec();
                    } },
                  "Record"
                ),
                React.createElement(
                  "button",
                  { id: "stop", onClick: function onClick() {
                      _this3.clickStop();
                    } },
                  "Stop"
                ),
                React.createElement(
                  "button",
                  { id: "play", onClick: function onClick() {
                      _this3.clickPlay();
                    } },
                  "Play"
                ),
                React.createElement(
                  "button",
                  { id: "download", onClick: function onClick() {
                      _this3.clickDownload();
                    } },
                  "Download"
                ),
                React.createElement("textarea", { className: "textarea", placeholder: "Write English Here" })
              )
            ),
            React.createElement(MR.YoutubeComponent, null)
          )
        );
      }
    }]);

    return EnglishRecordingComponent;
  }(React.Component);

  MR.EnglishRecordingComponent = EnglishRecordingComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('English component');
(function () {
  var HeaderComponent = function (_React$Component) {
    _inherits(HeaderComponent, _React$Component);

    function HeaderComponent() {
      _classCallCheck(this, HeaderComponent);

      return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).apply(this, arguments));
    }

    _createClass(HeaderComponent, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "div-head" },
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              { className: "button-to-ASL" },
              React.createElement(
                ReactRouter.Link,
                { to: '/SignLanguageRecordingComponent' },
                "Sign Language"
              )
            ),
            React.createElement(
              "div",
              { className: "button-to-English" },
              React.createElement(
                ReactRouter.Link,
                { to: '/EnglishRecordingComponent' },
                "English"
              )
            ),
            React.createElement(
              "div",
              { className: "button-to-home" },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "Home"
              )
            )
          )
        );
      }
    }]);

    return HeaderComponent;
  }(React.Component);

  MR.HeaderComponent = HeaderComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}
console.log('home component');
(function () {
  var HomeComponent = function (_React$Component) {
    _inherits(HomeComponent, _React$Component);

    function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).apply(this, arguments));
    }

    _createClass(HomeComponent, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              { className: "button-to-ASL" },
              React.createElement(
                ReactRouter.Link,
                { to: '/SignLanguageRecordingComponent' },
                "Sign Language"
              )
            ),
            React.createElement(
              "div",
              { className: "button-to-English" },
              React.createElement(
                ReactRouter.Link,
                { to: '/EnglishRecordingComponent' },
                "English"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              { className: "home-header" },
              "Hi. I'm LAURA."
            ),
            React.createElement(
              "p",
              { className: "home-paragraph" },
              " Linguistically Aware Users Record Accessibly"
            ),
            React.createElement(
              "p",
              { className: "home-about" },
              " ",
              React.createElement(
                ReactRouter.Link,
                { to: '/AboutComponent' },
                "Get to know me"
              )
            )
          )
        );
      }
    }]);

    return HomeComponent;
  }(React.Component);

  MR.HomeComponent = HomeComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var constraints = {
    "video": true,
    "audio": false
  };

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function (stream) {
    return stream;
  };

  var RecordingComponent = function (_React$Component) {
    _inherits(RecordingComponent, _React$Component);

    function RecordingComponent() {
      _classCallCheck(this, RecordingComponent);

      return _possibleConstructorReturn(this, (RecordingComponent.__proto__ || Object.getPrototypeOf(RecordingComponent)).apply(this, arguments));
    }

    _createClass(RecordingComponent, [{
      key: "theRecording",
      value: function theRecording(stream) {
        //turn this into an if else statement with text content and toggle?
        console.log('startRecording function');
        this.getit(stream);
        var mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder = mediaRecorder;

        if (this.mediaRecorder.state !== 'recording') {
          console.log('Created MediaRecorder', mediaRecorder);
          this.mediaRecorder.start();
          console.log('MediaRecorder state:', this.mediaRecorder.state);
          this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        }
      }
    }, {
      key: "handleDataAvailable",
      value: function handleDataAvailable(stream) {

        if (this.recordedBlobs === undefined) {
          this.recordedBlobs = [];
        };
        if (stream.data && stream.data.size > 0) {
          this.recordedBlobs.push(stream.data);
        }
      }
    }, {
      key: "error",
      value: function error() {
        console.log('error');
      }
    }, {
      key: "clickSupport",
      value: function clickSupport() {
        console.log('clicked support');
        if (navigator.getUserMedia === null) {
          alert('Sorry! This will not work on your browser.');
          console.log('no support');
        } else {
          console.log('has support');
        }
      }
    }, {
      key: "getit",
      value: function getit(stream) {
        var videoStream = stream;
        video.src = createSrc(stream);
        video.play();
      }
    }, {
      key: "clickRec",
      value: function clickRec() {
        var _this2 = this;

        navigator.getUserMedia(constraints, function (stream) {
          _this2.theRecording(stream);
        }, this.error);
        console.log('clicked record');
      }
    }, {
      key: "clickPause",
      value: function clickPause() {
        console.log('clicked Pause');
        video.pause();
      }
    }, {
      key: "clickResume",
      value: function clickResume() {
        console.log('clicked resume');
      }
    }, {
      key: "clickPlay",
      value: function clickPlay() {
        console.log('clicked play');
        video.src = window.URL.createObjectURL(this.superBlob);
      }
    }, {
      key: "clickStop",
      value: function clickStop() {
        console.log('clicked stop');
        this.mediaRecorder.stop();
        console.log("recorder stopped");
        console.log('mediaRecorder state:', this.mediaRecorder.state);
        console.log("the blobs", this.mediaRecorder.recordedBlobs);
        var superBlob = new Blob(this.mediaRecorder.recordedBlobs, { type: 'video/webm' });
        this.superBlob = superBlob;
        console.log('superBlob:', this.superBlob);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var videoStream = null;
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "header",
            null,
            React.createElement(
              "div",
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/RecordingComponent' },
                "Sign Language"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/EnglishRecordingComponent' },
                "English"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                "Home"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "recorder-container" },
            React.createElement(
              "h1",
              null,
              "Recorder"
            ),
            React.createElement("video", { id: "video", controls: true, autoPlay: true }),
            React.createElement(
              "button",
              { id: "supported", onClick: function onClick() {
                  _this3.clickSupport();
                } },
              "Support"
            ),
            React.createElement(
              "button",
              { id: "record", onClick: function onClick() {
                  _this3.clickRec();
                } },
              "Record"
            ),
            React.createElement(
              "button",
              { id: "pause", onClick: function onClick() {
                  _this3.clickPause();
                } },
              "Pause"
            ),
            React.createElement(
              "button",
              { id: "resume", onClick: function onClick() {
                  _this3.clickResume();
                } },
              "Resume"
            ),
            React.createElement(
              "button",
              { id: "stop", onClick: function onClick() {
                  _this3.clickStop();
                } },
              "Stop"
            ),
            React.createElement(
              "button",
              { id: "play", onClick: function onClick() {
                  _this3.clickPlay();
                } },
              "Play"
            )
          ),
          React.createElement(MR.YoutubeComponent, null)
        );
      }
    }]);

    return RecordingComponent;
  }(React.Component);

  MR.RecordingComponent = RecordingComponent;
})();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var constraints = {
    "video": true,
    "audio": false
  };

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

  var mediaSource = new MediaSource();
  var createSrc = window.URL ? window.URL.createObjectURL : function (stream) {
    return stream;
  };

  var SignLanguageRecordingComponent = function (_React$Component) {
    _inherits(SignLanguageRecordingComponent, _React$Component);

    function SignLanguageRecordingComponent() {
      _classCallCheck(this, SignLanguageRecordingComponent);

      return _possibleConstructorReturn(this, (SignLanguageRecordingComponent.__proto__ || Object.getPrototypeOf(SignLanguageRecordingComponent)).apply(this, arguments));
    }

    _createClass(SignLanguageRecordingComponent, [{
      key: "error",
      value: function error() {
        console.log('error');
      }
    }, {
      key: "clickSupport",
      value: function clickSupport() {
        console.log('clicked support');
        if (navigator.getUserMedia === null) {
          alert('Sorry! This will not work on your browser.');
          console.log('no support');
        } else {
          console.log('has support');
        }
      }
    }, {
      key: "getStream",
      value: function getStream(stream) {
        var videoStream = stream;
        video.src = createSrc(stream);
        video.play();
      }
    }, {
      key: "clickRec",
      value: function clickRec() {
        var _this2 = this;

        navigator.getUserMedia(constraints, function (stream) {
          _this2.theRecording(stream);
        }, this.error);
        console.log('clicked record');
      }
    }, {
      key: "theRecording",
      value: function theRecording(stream) {
        console.log('startRecording function');
        this.getStream(stream);
        var mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder = mediaRecorder;
        if (this.mediaRecorder.state !== 'recording') {
          console.log('Created MediaRecorder', mediaRecorder);
          this.mediaRecorder.start();
          console.log('MediaRecorder state:', this.mediaRecorder.state);
          this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        }
      }
    }, {
      key: "handleDataAvailable",
      value: function handleDataAvailable(stream) {
        if (this.recordedBlobs === undefined) {
          this.recordedBlobs = [];
        };
        if (stream.data && stream.data.size > 0) {
          this.recordedBlobs.push(stream.data);
        }
      }
    }, {
      key: "clickStop",
      value: function clickStop() {
        console.log('clicked stop');
        this.mediaRecorder.stop();
        console.log("recorder stopped");
        console.log('mediaRecorder state:', this.mediaRecorder.state);
        console.log("the blobs", this.mediaRecorder.recordedBlobs);
        var superBlob = new Blob(this.mediaRecorder.recordedBlobs, { type: 'video/webm' });
        this.superBlob = superBlob;
        console.log('superBlob:', this.superBlob);
      }
    }, {
      key: "clickPlay",
      value: function clickPlay() {
        console.log('clicked play');
        video.src = window.URL.createObjectURL(this.superBlob);
      }
    }, {
      key: "clickDownload",
      value: function clickDownload() {
        console.log('clicked download');

        var url = window.URL.createObjectURL(this.superBlob);
        var a = document.createElement('a');
        // a.style.display = 'none';
        a.href = url;
        a.download = 'SignLanguageVideo.webm';
        document.body.appendChild(a);
        a.click();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var videoStream = null;
        return React.createElement(
          "div",
          { className: "page" },
          React.createElement(MR.HeaderComponent, null),
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "h1",
              null,
              "Sign Language Recording"
            ),
            React.createElement(
              "p",
              null,
              "American Sign Language has no written form, making it unique among languages."
            ),
            React.createElement(
              "p",
              null,
              "*This will have no audio"
            ),
            React.createElement(
              "div",
              { className: "recorder-container" },
              React.createElement("video", { id: "video", controls: true, autoPlay: true }),
              React.createElement(
                "div",
                { className: "video-buttons" },
                React.createElement(
                  "button",
                  { id: "supported", onClick: function onClick() {
                      _this3.clickSupport();
                    } },
                  "Support"
                ),
                React.createElement(
                  "button",
                  { id: "record", onClick: function onClick() {
                      _this3.clickRec();
                    } },
                  "Record"
                ),
                React.createElement(
                  "button",
                  { id: "stop", onClick: function onClick() {
                      _this3.clickStop();
                    } },
                  "Stop"
                ),
                React.createElement(
                  "button",
                  { id: "play", onClick: function onClick() {
                      _this3.clickPlay();
                    } },
                  "Play"
                ),
                React.createElement(
                  "button",
                  { id: "download", onClick: function onClick() {
                      _this3.clickDownload();
                    } },
                  "Download"
                )
              )
            ),
            React.createElement(MR.YoutubeComponent, null)
          )
        );
      }
    }]);

    return SignLanguageRecordingComponent;
  }(React.Component);

  MR.SignLanguageRecordingComponent = SignLanguageRecordingComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  'use strict';

  var YoutubeComponent = function (_React$Component) {
    _inherits(YoutubeComponent, _React$Component);

    _createClass(YoutubeComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.theInput.focus();
      }
    }]);

    function YoutubeComponent() {
      _classCallCheck(this, YoutubeComponent);

      var _this = _possibleConstructorReturn(this, (YoutubeComponent.__proto__ || Object.getPrototypeOf(YoutubeComponent)).call(this));

      _this.state = {
        apiResult: {
          items: []
        }
      };
      _this.page = "&pageToken=CAoQAA";
      console.log('getting the info');
      return _this;
    }

    _createClass(YoutubeComponent, [{
      key: 'clicky',
      value: function clicky() {
        console.log('the input is', this.theInput.value, 'the page is');
        this.callAPI();
      }
    }, {
      key: 'pageUp',
      value: function pageUp() {
        console.log('next page');
        this.callAPI(this.state.apiResult.nextPageToken);
      }
    }, {
      key: 'pageDown',
      value: function pageDown() {
        console.log('previous page');
        this.callAPI(this.state.apiResult.previousPageToken);
      }
    }, {
      key: 'keyUp',
      value: function keyUp(evt) {
        console.log(evt.keyCode, evt.target);
        if (evt.keyCode === 13) {
          this.callAPI(evt.target);
        }
      }
    }, {
      key: 'callAPI',
      value: function callAPI(page) {
        var _this2 = this;

        console.log('page', page);
        var urlString = "https://www.googleapis.com/youtube/v3/search?q=" + this.theInput.value + "&q=YouTube+Data+API" + "&maxResults=10" + "&type=video" + "&videoCaption=closedCaption" + "&key=AIzaSyCoB7cJEg8MY9y8vgWby0nlhoJbImoEkF8" + "&part=snippet";

        if (page !== undefined) {

          urlString += "&pageToken=" + page;
        }

        $.ajax({
          url: urlString
        }).done(function (data) {
          console.log('got the data', data);
          _this2.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var YoutubeUrl = 'http://www.youtube.com/watch?v=';
        var embeddedUrl = 'https://www.youtube.com/embed/';
        return React.createElement(
          'div',
          { className: 'youtube-container' },
          React.createElement('iframe', { name: 'iframeName', className: 'iframeName' }),
          React.createElement(
            'div',
            { className: 'search-bar' },
            React.createElement('input', { className: 'youtube-search', placeholder: 'search', onKeyUp: function onKeyUp(evt) {
                _this3.keyUp(evt);
              }, ref: function ref(theDomElement) {
                _this3.theInput = theDomElement;
              } }),
            React.createElement(
              'button',
              { onClick: function onClick() {
                  _this3.clicky();
                } },
              'Enter'
            ),
            React.createElement(
              'button',
              { onClick: function onClick() {
                  _this3.pageUp();
                } },
              'Next'
            ),
            React.createElement(
              'button',
              { onClick: function onClick() {
                  _this3.pageDown();
                } },
              'Previous'
            )
          ),
          React.createElement(
            'ul',
            { className: 'results' },
            this.state.apiResult.items.map(function (info) {
              return React.createElement(
                'li',
                { className: 'theList',
                  key: info.id.videoId },
                React.createElement(
                  'a',
                  { className: 'video-link', href: embeddedUrl + info.id.videoId, target: 'iframeName' },
                  info.snippet.title
                ),
                React.createElement(
                  'p',
                  { className: 'video-description' },
                  info.snippet.description
                )
              );
            })
          )
        );
      }
    }]);

    return YoutubeComponent;
  }(React.Component);

  MR.YoutubeComponent = YoutubeComponent;
})();
'use strict';

if (window.MR === undefined) {
  window.MR = {};
}

(function () {
  console.log('routerjs');

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(Route, { path: '/', component: MR.HomeComponent }),
    React.createElement(Route, { path: '/SignLanguageRecordingComponent', component: MR.SignLanguageRecordingComponent }),
    React.createElement(Route, { path: '/YoutubeComponent', component: MR.YoutubeComponent }),
    React.createElement(Route, { path: '/EnglishComponent', component: MR.EnglishComponent }),
    React.createElement(Route, { path: '/EnglishRecordingComponent', component: MR.EnglishRecordingComponent }),
    React.createElement(Route, { path: '/AboutComponent', component: MR.AboutComponent })
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
