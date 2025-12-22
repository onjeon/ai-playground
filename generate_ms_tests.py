#!/usr/bin/env python3
import os
import json

# Base directory for tests
BASE_DIR = "/mnt/c/Users/user/Desktop/coding/ai_playground/src/tests-ms"

# Template for test file
TEST_TEMPLATE = """import {{ Test }} from '@/types';

const {camel_case}: Test = {{
  id: '{test_id}',
  title: '{title}',
  description: '{description}',
  questions: [
{questions}
  ],
  results: {{
{results}
  }},
  calculateResult: (answers: string[]) => {{
    const counts = answers.reduce((acc, answer) => {{
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }}, {{}} as Record<string, number>);
    
    return Object.keys(counts).reduce((a, b) => 
      counts[a] > counts[b] ? a : b
    );
  }}
}};

export default {camel_case};
"""

# Generic questions template
def generate_questions(topic_type):
    questions = []
    
    # Personality-based questions
    if 'personaliti' in topic_type or 'hiburan' in topic_type:
        q_list = [
            ("Pagi anda biasanya?", ["Penuh tenaga", "Perlahan-lahan", "Bergantung mood", "Terancang"]),
            ("Bila  buat keputusan?", ["Cepat dan tegas", "Fikir panjang", "Tanya pendapat orang", "Ikut feeling"]),
            ("Cara anda berkomunikasi?", ["Terus terang", "Lembut dan sopan", "Banyak lawak", "Pendiam"]),
            ("Bila hadapi masalah?", ["Tackle terus", "Analyze dulu", "Minta bantuan", "Elak kalau boleh"]),
            ("Gaya shopping anda?", ["Ada list", "Spontan", "Window shopping", "Online sahaja"]),
            ("Masa lapang anda?", ["Aktif keluar", "Rehat rumah", "Socialize", "Hobi personal"]),
            ("Cara express perasaan?", ["Terang-terangan", "Tunjuk through actions", "Kongsi dengan rapat", "Simpan dalam hati"]),
            ("Dalam kumpulan anda?", ["Leader", "Supporter", "Mediator", "Observer"]),
            ("Bila stress anda?", ["Exercise", "Makan", "Lepak kawan", "Me-time"]),
            ("Music preference?", ["Upbeat", "Chill", "Nostalgic", "Variety"]),
            ("Social media usage?", ["Active poster", "Silent reader", "Occasional", "Minimal"]),
            ("Weekend ideal anda?", ["Adventure", "Relax", "Socializing", "Productive"])
        ]
    # Psychology tests
    elif 'psikologi' in topic_type:
        q_list = [
            ("Reaksi pertama pada cabaran?", ["Excited terima", "Kaji dulu", "Rasa nervous", "Nak elak"]),
            ("Bila dapat feedback negatif?", ["Terima untuk improve", "Defend diri", "Rasa tersinggung", "Ignore"]),
            ("Cara handle emosi kuat?", ["Express terus", "Process sendiri", "Talk dengan orang", "Distract diri"]),
            ("Pattern tidur anda?", ["Konsisten", "Berubah-ubah", "Susah tidur", "Tidur banyak"]),
            ("Bila plan gagal?", ["Adapt cepat", "Kecewa sikit", "Stress teruk", "Give up"]),
            ("Energy level harian?", ["Tinggi consistent", "Naik turun", "Rendah pagi", "Rendah malam"]),
            ("Cara anda recharge?", ["Activity", "Rest", "Socializing", "Solitude"]),
            ("Bila buat salah?", ["Own it", "Explain", "Defend", "Deny"]),
            ("Trust orang baru?", ["Mudah percaya", "Beri chance", "Skeptical", "Susah percaya"]),
            ("Cara set boundaries?", ["Clear dan firm", "Gentle", "Struggle sikit", "Tak pandai"]),
            ("Response pada kritikan?", ["Terima baik", "Defensive", "Hurt", "Ignore"]),
            ("Overall outlook?", ["Optimistic", "Realistic", "Pessimistic", "Berubah-ubah"])
        ]
    # Relationship tests
    elif 'perhubungan' in topic_type:
        q_list = [
            ("Ideal date untuk anda?", ["Romantic dinner", "Adventure outdoor", "Simple Netflix", "Activity bersama"]),
            ("Cara tunjuk sayang?", ["Words", "Touch", "Gifts", "Quality time"]),
            ("Bila partner busy?", ["Understanding", "Miss sikit", "Need attention", "Feel neglected"]),
            ("Conflict resolution?", ["Talk terus", "Need space dulu", "Compromise", "Avoid"]),
            ("Jealousy level?", ["Minimal", "Normal", "Sikit tinggi", "Possessive"]),
            ("Commitment level?", ["Fully committed", "Serious tapi flexible", "Casual", "Independent"]),
            ("Communication style?", ["Constant updates", "Regular check-ins", "When needed", "Minimal"]),
            ("Future planning?", ["Plan together", "Discuss sometimes", "Go with flow", "Separate paths"]),
            ("Deal with ex?", ["Friendly", "Civil", "No contact", "Complicated"]),
            ("Love language?", ["Words", "Acts of service", "Gifts", "Touch"]),
            ("Argument style?", ["Discuss calmly", "Passionate", "Silent treatment", "Compromise"]),
            ("Relationship priority?", ["Top priority", "Important", "Balance", "Independence")
        ]
    # Career/Work tests
    elif 'kerjaya' in topic_type:
        q_list = [
            ("Work style anda?", ["Independent", "Team player", "Leader", "Flexible"]),
            ("Bila deadline ketat?", ["Thrive", "Manage okay", "Stress", "Struggle"]),
            ("Meeting approach?", ["Lead discussion", "Contribute ideas", "Listen mostly", "Zone out"]),
            ("Email response time?", ["Immediate", "Same day", "When free", "Delay"]),
            ("Office politics?", ["Navigate well", "Stay neutral", "Avoid", "Victim"]),
            ("Career ambition?", ["Very ambitious", "Steady growth", "Work-life balance", "Just a job"]),
            ("Feedback dari boss?", ["Welcome it", "Okay kalau constructive", "Sensitive", "Defensive"]),
            ("Multitasking ability?", ["Excellent", "Manage", "Prefer focus", "Struggle"]),
            ("Work hours?", ["Extend bila perlu", "Strict 9-5", "Flexible", "Minimal"]),
            ("Learning curve?", ["Fast learner", "Steady", "Need time", "Struggle"]),
            ("Networking?", ["Active", "Occasional", "Reluctant", "Avoid"]),
            ("Job satisfaction?", ["Passionate", "Content", "Okay", "Unsatisfied"])
        ]
    # IQ/Intelligence tests
    elif 'kecerdasan' in topic_type or 'iq' in topic_type:
        q_list = [
            ("Pattern: 2, 4, 8, 16, ?", ["32", "24", "20", "28"]),
            ("Opposite of 'hot'?", ["Cold", "Warm", "Cool", "Freeze"]),
            ("If A=1, B=2, C=?", ["3", "4", "5", "6"]),
            ("Which doesn't belong?", ["Option A", "Option B", "Option C", "Option D"]),
            ("Logic: If X then Y, X is true, so?", ["Y is true", "Y is false", "Maybe Y", "No relation"]),
            ("Sequence: A, C, E, G, ?", ["I", "H", "J", "F"]),
            ("Math: 15 + 7 x 2 = ?", ["29", "44", "37", "30"]),
            ("Analogy: Hot:Cold :: Up:?", ["Down", "Over", "Under", "Side"]),
            ("Visual pattern completion", ["Option A", "Option B", "Option C", "Option D"]),
            ("Word relationship", ["Related", "Opposite", "Similar", "Different"]),
            ("Number sequence", ["Next number", "Previous", "Double", "Half"]),
            ("Logical deduction", ["True", "False", "Maybe", "Insufficient info"])
        ]
    # Food/Cultural tests
    else:
        q_list = [
            ("Level pedas anda?", ["Tak pedas", "Sederhana", "Pedas", "Extra pedas"]),
            ("Cara makan?", ["Slow and savor", "Normal pace", "Cepat-cepat", "Sambil buat lain"]),
            ("Try makanan baru?", ["Always", "Sometimes", "Rarely", "Stick to favorite"]),
            ("Makan dengan?", ["Ramai-ramai", "Small group", "Partner", "Sorang"]),
            ("Preference tempat?", ["Fancy", "Comfortable", "Street food", "Home"]),
            ("Budget makan?", ["Worth it", "Reasonable", "Cheap", "Free best"]),
            ("Bila lapar?", ["Cranky", "Okay", "Can tahan", "Lupa makan"]),
            ("Cooking skill?", ["Chef level", "Okay", "Basic", "Can't cook"]),
            ("Food photo?", ["Must snap", "Sometimes", "Rarely", "Never"]),
            ("Leftover stance?", ["Tapau always", "Share", "Leave it", "Finish semua"]),
            ("Meal timing?", ["Strict", "Flexible", "Irregular", "Skip meals"]),
            ("Food preference?", ["Traditional", "Modern", "Fusion", "International"])
        ]
    
    # Generate 12 questions
    result = []
    for i, (q, opts) in enumerate(q_list[:12], 1):
        result.append(f'''    {{
      id: {i},
      question: '{q}',
      options: [
        {{ id: 'A', text: '{opts[0]}', type: 'A' }},
        {{ id: 'B', text: '{opts[1]}', type: 'B' }},
        {{ id: 'C', text: '{opts[2]}', type: 'C' }},
        {{ id: 'D', text: '{opts[3]}', type: 'D' }}
      ]
    }}''')
    
    return ',\n'.join(result)

def generate_results(topic_type, title):
    # Generate appropriate results based on type
    return """    A: {
      title: 'Type A',
      description: 'Anda personaliti yang dinamik dan proaktif! Anda suka ambil inisiatif dan lead. Energy anda inspiring untuk orang sekeliling.'
    },
    B: {
      title: 'Type B',
      description: 'Anda personaliti yang seimbang dan stabil! Anda ada approach yang measured dan thoughtful. Orang appreciate consistency anda.'
    },
    C: {
      title: 'Type C',
      description: 'Anda personaliti yang creative dan flexible! Anda adapt dengan baik dan suka variety. Perspective unik anda adalah aset.'
    },
    D: {
      title: 'Type D',
      description: 'Anda personaliti yang thoughtful dan careful! Anda consider semua angles before decide. Depth thinking anda valuable.'
    }"""

# List of all 150 tests to create
TESTS = [
    # Already created (10): personaliti-nasi-lemak, personaliti-rendang, personaliti-mamak, personaliti-raya, 
    # personaliti-karaoke-ms, personaliti-minum-ms, personaliti-pasar-ms, personaliti-shopee-ms, 
    # personaliti-grab-ms, personaliti-teh-tarik
    
    # Psychology (continuing from existing)
    ('psikologi-emosi', 'Cara Mengawal Emosi', 'Bagaimana anda mengurus emosi?', 'psikologi'),
    ('psikologi-introvert-ms', 'Tahap Introvert', 'Sejauh mana anda introvert?', 'psikologi'),
    ('psikologi-empati-ms', 'Tahap Empati', 'Sejauh mana anda berempati?', 'psikologi'),
    ('psikologi-sabar-ms', 'Tahap Kesabaran', 'Sejauh mana anda sabar?', 'psikologi'),
    ('psikologi-optimis-ms', 'Tahap Optimisme', 'Sejauh mana anda optimistic?', 'psikologi'),
    ('psikologi-tegas', 'Tahap Ketegasan', 'Sejauh mana anda tegas?', 'psikologi'),
    ('psikologi-kreatif', 'Tahap Kreativiti', 'Sejauh mana anda creative?', 'psikologi'),
    
    # Relationship (20)
    ('perhubungan-bahasa-cinta', 'Bahasa Cinta Anda', 'Apa love language anda?', 'perhubungan'),
    ('perhubungan-cemburu', 'Cara Cemburu', 'Bagaimana anda jealous?', 'perhubungan'),
    ('perhubungan-putus', 'Cara Move On', 'Bagaimana anda move on?', 'perhubungan'),
    ('perhubungan-date-ms', 'Gaya Dating', 'Gaya dating anda?', 'perhubungan'),
    ('perhubungan-jarak-jauh', 'Cara Maintain LDR', 'Bagaimana anda handle LDR?', 'perhubungan'),
    ('perhubungan-komunikasi-ms', 'Cara Komunikasi dengan Pasangan', 'Gaya komunikasi dalam relationship?', 'perhubungan'),
    ('perhubungan-kepercayaan', 'Tahap Kepercayaan', 'Sejauh mana anda percaya?', 'perhubungan'),
    ('perhubungan-komitmen', 'Tahap Komitmen', 'Sejauh mana anda committed?', 'perhubungan'),
    ('perhubungan-romantik', 'Tahap Romantik', 'Sejauh mana anda romantic?', 'perhubungan'),
    ('perhubungan-pasangan-ideal', 'Pasangan Ideal', 'Jenis pasangan ideal anda?', 'perhubungan'),
    
    # Career (30)
    ('kerjaya-gaya-kerja', 'Gaya Bekerja', 'Bagaimana anda bekerja?', 'kerjaya'),
    ('kerjaya-kepimpinan', 'Gaya Kepimpinan', 'Jenis leader anda?', 'kerjaya'),
    ('kerjaya-kerja-berpasukan', 'Gaya Kerja Berpasukan', 'Bagaimana anda dalam team?', 'kerjaya'),
    ('kerjaya-deadline-ms', 'Cara Hadapi Deadline', 'Bagaimana anda handle deadline?', 'kerjaya'),
    ('kerjaya-naik-pangkat', 'Strategi Naik Pangkat', 'Cara anda climb career ladder?', 'kerjaya'),
    ('kerjaya-networking-ms', 'Gaya Networking', 'Bagaimana anda network?', 'kerjaya'),
    ('kerjaya-interview-ms', 'Gaya Interview', 'Bagaimana anda dalam interview?', 'kerjaya'),
    ('kerjaya-startup-ms', 'Semangat Startup', 'Sesuai dengan startup culture?', 'kerjaya'),
    ('kerjaya-wfh-ms', 'Gaya WFH', 'Bagaimana anda work from home?', 'kerjaya'),
    ('kerjaya-meeting-ms', 'Gaya Meeting', 'Bagaimana anda dalam meeting?', 'kerjaya'),
]

def to_camel_case(snake_str):
    components = snake_str.split('-')
    return ''.join(x.title() for x in components)

def create_test(test_id, title, description, topic_type):
    # Create directory
    test_dir = os.path.join(BASE_DIR, test_id)
    os.makedirs(test_dir, exist_ok=True)
    
    # Generate content
    camel_case = to_camel_case(test_id)
    questions = generate_questions(topic_type)
    results = generate_results(topic_type, title)
    
    content = TEST_TEMPLATE.format(
        camel_case=camel_case,
        test_id=test_id,
        title=title,
        description=description,
        questions=questions,
        results=results
    )
    
    # Write file
    file_path = os.path.join(test_dir, 'index.ts')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created: {test_id}")

# Create all tests
for test_data in TESTS:
    create_test(*test_data)

print(f"\nCreated {len(TESTS)} additional tests!")
