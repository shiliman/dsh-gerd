export const DATA = {
  id: 'dsh-gerd',
  name: '胃食管反流',
  prefix: 'gerd',
  label: '胃食管反流',
  defaultEeriness: 2,
  gain: 0.42,
  flareChance: 0.3,
  flareGain: 22,
  triggerWeight: 1,
  flareWeight: 0.9,
  reliefs: [
    { id: 'antacid', label: '抑酸药', relief: 26, minutes: 40, calm: 9 },
    { id: 'upright', label: '坐直、别窝着', relief: 14, minutes: 25, calm: 6 },
    { id: 'water', label: '喝两口温水', relief: 8, minutes: 15, calm: 3 },
  ],
  body: {
    stiff: '胸口有点烧，坐直了会好一点。',
    ache: '胃里往上返，嗓子眼发酸；说话前得先咽一下。',
    flare: '一股酸水顶到喉咙，呛了一下；胸口烧得慌，只能停下来缓。',
  },
  voice: {
    base: '允许说话中途被一个嗝打断；嗓子发酸的时候句子会短一截。',
    flare: '允许呛一下、允许停下来缓半句；不要描述呕吐物。别把不舒服说成矫情。',
  },
}
