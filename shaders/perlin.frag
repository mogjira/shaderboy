#version 460
#extension GL_GOOGLE_include_directive : enable

#include "common.glsl"

layout(location = 0) in vec2 uv;

layout(location = 0) out vec4 outColor;

float getAngle(const vec2 st, const float r)
{
    if (r < 0.0001) return 0.0;
    const float x = st.x;
    const float y = st.y;
    const float v = x / r;
    if (y >= 0) return acos(v);
    else return -1 * acos(v);
}

void main()
{
    const vec2 st = uv * 2.0 - 1.0;
    const float t = parms.time;
    const float r = length(st);
    const float angle = getAngle(st, r);
    outColor = vec4(uv, 0.0, 1.0);
}
