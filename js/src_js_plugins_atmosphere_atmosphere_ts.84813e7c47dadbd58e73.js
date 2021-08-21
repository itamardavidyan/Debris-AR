"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_atmosphere_atmosphere_ts"],{

/***/ "./src/js/plugins/atmosphere/atmosphere.ts":
/*!*************************************************!*\
  !*** ./src/js/plugins/atmosphere/atmosphere.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Atmosphere": () => (/* binding */ Atmosphere)
/* harmony export */ });
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
var Atmosphere = /** @class */ (function () {
    function Atmosphere(gl, earth, settingsManager, glm) {
        // Move to the code the creates the moon?
        if (settingsManager.enableLimitedUI || settingsManager.isDrawLess)
            return;
        // Setup References to World
        this.gl = gl;
        this.earth = earth;
        this.glm = glm;
        this.settingsManager = settingsManager;
        this.shaderCode = {
            frag: "#version 300 es\n          precision highp float;        \n    \n          uniform vec3 u_lightDirection;\n          in vec3 v_normal;\n          in float v_dist;\n  \n          out vec4 fragColor;\n    \n          void main () {\n              float sunAmount = max(dot(v_normal, u_lightDirection), 0.1);\n              float darkAmount = max(dot(v_normal, -u_lightDirection), 0.0);\n              float a4 = pow(1.3 - v_dist / 2.0, 1.1) * 2.0;\n              float r = 1.0 - sunAmount;\n              float g = max(1.0 - sunAmount, 0.75) - darkAmount;\n              float b = max(sunAmount, 0.8) - darkAmount;\n              float a1 = min(sunAmount, 0.8) * 2.0;\n              float a2 = min(pow(darkAmount / 1.15, 2.0),0.2);\n              float a3 = pow(v_dist,2.0) * -1.0 + 1.2;\n              float a = min(a1 - a2, a3) * a4;\n              fragColor    = vec4(vec3(r,g,b), a);\n          }\n          ",
            vert: "#version 300 es\n          in vec3 position;\n          in vec3 normal;\n    \n          uniform mat4 u_pMatrix;\n          uniform mat4 u_camMatrix;\n          uniform mat4 u_mvMatrix;\n          uniform mat3 u_nMatrix;\n    \n          out vec3 v_normal;\n          out float v_dist;\n    \n          void main(void) {\n              vec4 position1 = u_camMatrix * u_mvMatrix * vec4(position, 1.0);\n              vec4 position0 = u_camMatrix * u_mvMatrix * vec4(vec3(0.0,0.0,0.0), 1.0);\n              gl_Position = u_pMatrix * position1;\n              v_dist = distance(position0.xz,position1.xz) / " + settingsManager.atmosphereSize + ".0;\n              v_normal = normalize( u_nMatrix * normal );\n          }\n          ",
        };
        this.numLatSegs = 64;
        this.numLonSegs = 64;
        // We draw the moon way closer than it actually is because of depthBuffer issues
        // Each draw loop we will scale the real position so it is consistent
        this.drawPosition = [0, 0, 0];
        // Create a gl program from the vert/frag shaders and geometry buffers
        this.init(gl);
        this.loaded = true;
    }
    Atmosphere.prototype.init = function (gl) {
        var program = gl.createProgram();
        program.vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(program.vertShader, this.shaderCode.vert);
        gl.compileShader(program.vertShader);
        program.fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(program.fragShader, this.shaderCode.frag);
        gl.compileShader(program.fragShader);
        gl.attachShader(program, program.vertShader);
        gl.attachShader(program, program.fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(program);
            throw new Error('Could not compile WebGL program. \n\n' + info);
        }
        this.program = program;
        // Assign Attributes
        this.program.aVertexPosition = gl.getAttribLocation(this.program, 'position');
        this.program.aVertexNormal = gl.getAttribLocation(this.program, 'normal');
        this.program.u_pMatrix = gl.getUniformLocation(this.program, 'u_pMatrix');
        this.program.u_camMatrix = gl.getUniformLocation(this.program, 'u_camMatrix');
        this.program.u_mvMatrix = gl.getUniformLocation(this.program, 'u_mvMatrix');
        this.program.u_nMatrix = gl.getUniformLocation(this.program, 'u_nMatrix');
        this.program.u_lightDirection = gl.getUniformLocation(this.program, 'u_lightDirection');
        // generate a uvsphere bottom up, CCW order
        var vertPos = [];
        var vertNorm = [];
        var texCoord = [];
        for (var lat = 0; lat <= this.numLatSegs; lat++) {
            var latAngle = (Math.PI / this.numLatSegs) * lat - Math.PI / 2;
            var diskRadius = Math.cos(Math.abs(latAngle));
            var z = Math.sin(latAngle);
            // console.log('LAT: ' + latAngle * RAD2DEG + ' , Z: ' + z);
            // var i = 0;
            for (var lon = 0; lon <= this.numLonSegs; lon++) {
                // add an extra vertex for texture funness
                var lonAngle = ((Math.PI * 2) / this.numLonSegs) * lon;
                var x = Math.cos(lonAngle) * diskRadius;
                var y = Math.sin(lonAngle) * diskRadius;
                // console.log('i: ' + i + '    LON: ' + lonAngle * RAD2DEG + ' X: ' + x + ' Y: ' + y)
                // mercator cylindrical projection (simple angle interpolation)
                var v = 1 - lat / this.numLatSegs;
                var u = 0.5 + lon / this.numLonSegs; // may need to change to move map
                // console.log('u: ' + u + ' v: ' + v);
                // normals: should just be a vector from center to point (aka the point itself!
                vertPos.push(x * this.settingsManager.atmosphereSize);
                vertPos.push(y * this.settingsManager.atmosphereSize);
                vertPos.push(z * this.settingsManager.atmosphereSize);
                texCoord.push(u);
                texCoord.push(v);
                vertNorm.push(x);
                vertNorm.push(y);
                vertNorm.push(z);
                // i++;
            }
        }
        // ok let's calculate vertex draw orders.... indiv triangles
        var vertIndex = [];
        for (var lat = 0; lat < this.numLatSegs; lat++) {
            // this is for each QUAD, not each vertex, so <
            for (var lon = 0; lon < this.numLonSegs; lon++) {
                var blVert = lat * (this.numLonSegs + 1) + lon; // there's this.numLonSegs + 1 verts in each horizontal band
                var brVert = blVert + 1;
                var tlVert = (lat + 1) * (this.numLonSegs + 1) + lon;
                var trVert = tlVert + 1;
                // console.log('bl: ' + blVert + ' br: ' + brVert +  ' tl: ' + tlVert + ' tr: ' + trVert);
                vertIndex.push(blVert);
                vertIndex.push(brVert);
                vertIndex.push(tlVert);
                vertIndex.push(tlVert);
                vertIndex.push(trVert);
                vertIndex.push(brVert);
            }
        }
        this.buffers = {};
        this.buffers.vertCount = vertIndex.length;
        this.buffers.vertPosBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertPosBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertPos), gl.STATIC_DRAW);
        this.buffers.vertNormBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertNormBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertNorm), gl.STATIC_DRAW);
        this.buffers.vertIndexBuf = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.vertIndexBuf);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertIndex), gl.STATIC_DRAW);
        this.vao = gl.createVertexArray();
        gl.bindVertexArray(this.vao);
        // Select the vertex position buffer
        // Enable the attribute
        // Set the attribute
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertPosBuf);
        gl.enableVertexAttribArray(this.program.aVertexPosition);
        gl.vertexAttribPointer(this.program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
        // Select the vertex normals buffer
        // Enable the attribute
        // Set the attribute
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vertNormBuf);
        gl.enableVertexAttribArray(this.program.aVertexNormal);
        gl.vertexAttribPointer(this.program.aVertexNormal, 3, gl.FLOAT, false, 0, 0);
        // Select the vertex indicies buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.vertIndexBuf);
        gl.bindVertexArray(null);
    };
    Atmosphere.prototype.draw = function (pMatrix, cameraManager) {
        if (!this.loaded)
            return;
        var gl = this.gl;
        // Enable blending and ignore depth test (especially on self)
        gl.enable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // Change to the atmosphere shader
        gl.useProgram(this.program);
        gl.bindVertexArray(this.vao);
        // Set the uniforms
        this.update(cameraManager.camPitch);
        gl.uniformMatrix3fv(this.program.u_nMatrix, false, this.nMatrix);
        gl.uniformMatrix4fv(this.program.u_mvMatrix, false, this.mvMatrix);
        gl.uniformMatrix4fv(this.program.u_pMatrix, false, pMatrix);
        gl.uniformMatrix4fv(this.program.u_camMatrix, false, cameraManager.camMatrix);
        gl.uniform3fv(this.program.u_lightDirection, this.earth.lightDirection);
        // Draw everythign to screen
        gl.drawElements(gl.TRIANGLES, this.buffers.vertCount, gl.UNSIGNED_SHORT, 0);
        gl.bindVertexArray(null);
        // Disable blending and reeneable depth test
        gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
    };
    Atmosphere.prototype.update = function (camPitch) {
        // Start with an empyy model view matrix
        this.mvMatrix = this.glm.mat4.create();
        this.glm.mat4.identity(this.mvMatrix);
        // Rotate model view matrix to prevent lines showing as camera rotates
        this.glm.mat4.rotateY(this.mvMatrix, this.mvMatrix, 90 * (Math.PI / 180) - camPitch);
        // Scale the atmosphere to 0,0,0 - needed?
        this.glm.mat4.translate(this.mvMatrix, this.mvMatrix, [0, 0, 0]);
        // Calculate normals
        this.nMatrix = this.glm.mat3.create();
        this.glm.mat3.normalFromMat4(this.nMatrix, this.mvMatrix);
    };
    return Atmosphere;
}());



/***/ })

}]);
//# sourceMappingURL=src_js_plugins_atmosphere_atmosphere_ts.84813e7c47dadbd58e73.js.map