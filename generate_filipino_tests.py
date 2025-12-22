#!/usr/bin/env python3
"""
Generate 150 Filipino test data files
"""

import os
import json

# Define all 150 test configurations
tests = [
    # IQ Tests (already created: katalinuhan-logic-ph, katalinuhan-math-ph, katalinuhan-pattern-ph, katalinuhan-memory-ph, katalinuhan-verbal-ph)
    ("katalinuhan-spatial-ph", "Test ng Spatial Reasoning", "Sukatin ang iyong spatial intelligence"),
    ("katalinuhan-analytical-ph", "Test ng Analytical Thinking", "Sukatin ang iyong analytical skills"),
    ("katalinuhan-creative-ph", "Test ng Creative Thinking", "Sukatin ang iyong creativity"),
    ("katalinuhan-focus-ph", "Test ng Focus", "Sukatin ang iyong concentration ability"),
    ("katalinuhan-problem-solving-ph", "Test ng Problem Solving", "Sukatin ang iyong problem-solving skills"),
    
    # Food Tests (already created: pagkain-lechon, pagkain-sisig)
    ("pagkain-halo-halo", "Anong Halo-Halo Layer Ka?", "Alamin kung anong layer ng halo-halo ang personality mo"),
    ("pagkain-inasal", "Anong Inasal Part Ka?", "Alamin kung anong parte ng chicken inasal ka"),
    ("pagkain-kare-kare", "Anong Kare-Kare Ingredient Ka?", "Alamin kung anong sangkap ng kare-kare ang personality mo"),
    ("pagkain-bulalo", "Anong Bulalo Part Ka?", "Alamin kung anong parte ng bulalo ang katulad mo"),
    ("pagkain-tapa", "Anong Tapa Style Mo?", "Alamin kung anong klase ng tapa ang personality mo"),
    ("pagkain-lumpia", "Anong Lumpia Type Ka?", "Alamin kung anong uri ng lumpia ka"),
    ("pagkain-pancit", "Anong Pancit Variety Ka?", "Alamin kung anong pancit ang katulad mo"),
    ("pagkain-bibingka", "Anong Bibingka Topping Ka?", "Alamin kung anong topping ng bibingka ka"),
    
    # Street Food
    ("streetfood-fishball", "Anong Fishball Eater Ka?", "Alamin kung anong tipo ka ng fishball lover"),
    ("streetfood-isaw", "Anong Isaw Personality Mo?", "Alamin kung anong klase ka ng isaw fanatic"),
    ("streetfood-kwek-kwek", "Anong Kwek-Kwek Style Mo?", "Alamin kung paano ka kumain ng kwek-kwek"),
    ("streetfood-balut", "Gaano Ka Ka-Balut?", "Alamin ang iyong balut eating personality"),
    ("streetfood-taho", "Anong Taho Drinker Ka?", "Alamin kung paano ka sa taho"),
    
    # Social Media (already created: social-facebook-ph)
    ("social-tiktok-ph", "Anong TikTok User Ka?", "Alamin kung anong tipo ka sa TikTok PH"),
    ("social-twitter-ph", "Anong Twitter PH User Ka?", "Alamin kung ano ang Twitter personality mo"),
    ("social-instagram-ph", "Anong IG User Ka?", "Alamin kung anong Instagram user ka"),
    ("social-youtube-ph", "Anong YouTube Viewer Ka?", "Alamin kung paano ka manonood sa YouTube"),
    
    # Family & Traditions (already created: pamilya-role)
    ("pamilya-magulang", "Anong Relasyon Mo sa Magulang?", "Alamin ang dynamics ninyo ng parents mo"),
    ("pamilya-kapatid", "Anong Kapatid Ka?", "Alamin kung ano ang role mo sa siblings"),
    ("pamilya-lola-lolo", "Anong Apo Ka?", "Alamin kung anong tipo ka ng apo"),
    ("pamilya-tita-tito", "Anong Pamangkin Ka?", "Alamin ang relationship mo sa tita at tito"),
    
    # Regional
    ("rehiyon-luzon", "Gaano Ka Ka-Luzon?", "Alamin kung gaano ka Luzon personality"),
    ("rehiyon-visayas", "Gaano Ka Ka-Bisaya?", "Alamin kung gaano ka Visayan"),
    ("rehiyon-mindanao", "Gaano Ka Ka-Mindanao?", "Alamin kung gaano ka Mindanaoan"),
    ("rehiyon-metro-manila", "Gaano Ka Ka-Manila?", "Alamin kung gaano ka Metro Manila"),
    ("rehiyon-provincial", "Gaano Ka Ka-Probinsyano?", "Alamin kung gaano ka provincial"),
    
    # Work Culture (already created: trabaho-bpo)
    ("trabaho-opisina-ph", "Anong Office Worker Ka?", "Alamin kung anong tipo ka sa opisina"),
    ("trabaho-ofw", "Anong OFW Ka?", "Alamin kung anong klaseng OFW ka"),
    ("trabaho-negosyante", "Anong Negosyante Ka?", "Alamin kung anong type ka ng business person"),
    ("trabaho-freelancer-ph", "Anong Freelancer Ka?", "Alamin kung anong klase ka ng freelancer"),
    
    # Student Life (already created: estudyante-barkada)
    ("estudyante-review", "Anong Study Style Mo?", "Alamin kung paano ka mag-review"),
    ("estudyante-exam", "Anong Exam Taker Ka?", "Alamin kung paano ka sa exams"),
    ("estudyante-org", "Anong Papel Mo sa Org?", "Alamin kung ano ang role mo sa org"),
    ("estudyante-thesis", "Anong Thesis Writer Ka?", "Alamin kung paano ka sa thesis"),
    
    # Dating & Love
    ("ligaw-traditional", "Anong Traditional Manliligaw Ka?", "Alamin ang iyong panliligaw style"),
    ("ligaw-modern", "Anong Modern Dater Ka?", "Alamin kung paano ka sa modern dating"),
    ("ligaw-online-ph", "Anong Online Dater Ka?", "Alamin kung paano ka sa online dating"),
    ("ligaw-harana", "Anong Harana Style Mo?", "Alamin kung paano ka mag-harana"),
    ("ligaw-torpe", "Gaano Ka Ka-Torpe?", "Sukatin ang iyong torpe level"),
    
    # Transportation (already created: transportasyon-jeepney)
    ("transportasyon-mrt", "Anong MRT Commuter Ka?", "Alamin kung anong tipo ka sa MRT"),
    ("transportasyon-uv", "Anong UV Express Rider Ka?", "Alamin kung paano ka sa UV"),
    ("transportasyon-tricycle", "Anong Tricycle Passenger Ka?", "Alamin kung paano ka sa trike"),
    ("transportasyon-bus", "Anong Bus Passenger Ka?", "Alamin kung anong tipo ka sa bus"),
    
    # Shopping (already created: shopping-sm)
    ("shopping-divisoria", "Anong Divisoria Shopper Ka?", "Alamin kung paano ka sa Divisoria"),
    ("shopping-ukay", "Anong Ukay Shopper Ka?", "Alamin kung paano ka mag-ukay"),
    ("shopping-online-ph", "Anong Online Shopper Ka?", "Alamin kung paano ka bumili online"),
    ("shopping-palengke", "Anong Palengke Shopper Ka?", "Alamin kung paano ka sa palengke"),
    
    # Celebrations (already created: fiesta-ph)
    ("selebrasyon-pasko", "Anong Christmas Celebrator Ka?", "Alamin kung paano ka mag-celebrate ng Pasko"),
    ("selebrasyon-new-year", "Anong New Year Personality Mo?", "Alamin kung paano ka sa Bagong Taon"),
    ("selebrasyon-holy-week", "Anong Holy Week Observer Ka?", "Alamin kung paano ka sa Semana Santa"),
    ("selebrasyon-birthday", "Anong Birthday Celebrant Ka?", "Alamin kung paano ka mag-birthday"),
    
    # Entertainment
    ("tv-noontime-show", "Anong Noontime Show Ka?", "Alamin kung anong noontime show ang personality mo"),
    ("tv-teleserye", "Anong Teleserye Character Ka?", "Alamin kung anong karakter ka sa teleserye"),
    ("tv-game-show", "Anong Game Show Contestant Ka?", "Alamin kung paano ka sa game shows"),
    
    # Sports (already created: basketball-ph)
    ("sports-boxing-ph", "Anong Boxing Fan Ka?", "Alamin kung anong tipo ka ng boxing fanatic"),
    ("sports-volleyball", "Anong Volleyball Player Ka?", "Alamin kung anong tipo ka sa volleyball"),
    ("sports-billiards", "Anong Billiards Player Ka?", "Alamin kung paano ka maglaro ng billiards"),
    
    # Weather & Nature
    ("panahon-ulan", "Paano Ka Sa Ulan?", "Alamin kung paano mo ine-experience ang ulan"),
    ("panahon-init", "Paano Ka Sa Init?", "Alamin kung paano ka sa mainit na panahon"),
    ("panahon-bagyo", "Paano Ka Sa Bagyo?", "Alamin kung paano ka sa typhoon season"),
    
    # More Food Adventures
    ("kakanin-puto", "Anong Puto Variety Ka?", "Alamin kung anong puto ang personality mo"),
    ("kakanin-kutsinta", "Anong Kutsinta Lover Ka?", "Alamin kung paano ka sa kutsinta"),
    ("kakanin-sapin-sapin", "Anong Sapin-Sapin Layer Ka?", "Alamin kung anong layer ka"),
    
    # Coffee & Drinks
    ("kape-3in1", "Anong 3-in-1 Coffee Drinker Ka?", "Alamin kung paano ka sa instant coffee"),
    ("kape-barako", "Gaano Ka Ka-Barako?", "Alamin kung gaano ka sa strong coffee"),
    ("softdrinks-ph", "Anong Softdrinks Ka?", "Alamin kung anong softdrinks ang personality mo"),
    
    # Personality & Psychology
    ("ugali-tsismoso", "Gaano Ka Ka-Tsismoso?", "Alamin kung gaano ka mahilig sa chismis"),
    ("ugali-makulit", "Gaano Ka Ka-Makulit?", "Sukatin ang iyong kulit level"),
    ("ugali-tamad", "Gaano Ka Ka-Tamad?", "Alamin kung gaano ka tamad honestly"),
    ("ugali-matipid", "Gaano Ka Ka-Kuripot?", "Alamin kung gaano ka matipid o kuripot"),
    ("ugali-masungit", "Gaano Ka Ka-Sungit?", "Sukatin ang iyong sungit level"),
    ("ugali-maasikaso", "Gaano Ka Ka-Maasikaso?", "Alamin kung gaano ka caring"),
    
    # Social Behaviors
    ("social-drama", "Gaano Ka Ka-Dramatic?", "Alamin kung gaano ka drama queen/king"),
    ("social-party", "Anong Party Goer Ka?", "Alamin kung paano ka sa parties"),
    ("social-networking", "Anong Networker Ka?", "Alamin kung paano ka makipag-network"),
    
    # Technology & Gaming
    ("tech-mobile-legends", "Anong ML Player Ka?", "Alamin kung anong tipo ka sa Mobile Legends"),
    ("tech-social-media", "Gaano Ka Ka-Addicted sa Socmed?", "Sukatin ang social media addiction mo"),
    ("tech-online-shopping", "Gaano Ka Ka-Shopaholic Online?", "Alamin kung gaano ka addict sa online shopping"),
    
    # More Superstitions & Beliefs (already created: pamahiin-filipino)
    ("pamahiin-swerte", "Anong Swerte Believer Ka?", "Alamin kung paano ka sa good luck charms"),
    ("pamahiin-kasal", "Gaano Ka Naniniwala sa Wedding Pamahiin?", "Alamin belief mo sa wedding superstitions"),
    
    # Habits & Lifestyle
    ("lifestyle-gabi", "Gaano Ka Ka-Night Owl?", "Alamin kung gaano ka puyat"),
    ("lifestyle-umaga", "Gaano Ka Ka-Early Bird?", "Alamin kung morning person ka ba"),
    ("lifestyle-tamad-umaga", "Paano Ka Gumising?", "Alamin ang morning routine personality mo"),
    
    # Money & Finance
    ("pera-savings", "Gaano Ka Ka-Saver?", "Alamin kung gaano ka mahusay mag-ipon"),
    ("pera-gastador", "Gaano Ka Ka-Gastador?", "Alamin kung gaano ka gastos"),
    ("pera-utang", "Paano Ka Sa Utang?", "Alamin ang relationship mo sa borrowing"),
    
    # Communication Style
    ("communication-text", "Anong Texter Ka?", "Alamin kung paano ka mag-text"),
    ("communication-chat", "Anong Chatter Ka?", "Alamin kung paano ka sa chat"),
    ("communication-call", "Anong Caller Ka?", "Alamin kung paano ka tumawag"),
    
    # More Humor (already created: humor-pinoy)
    ("humor-memes", "Anong Meme Lord Ka?", "Alamin kung anong meme personality mo"),
    ("humor-puns", "Gaano Ka Ka-Corny?", "Alamin kung gaano ka corny sa jokes"),
    
    # Music & Arts
    ("music-opm", "Anong OPM Fan Ka?", "Alamin kung anong OPM listener ka"),
    ("music-karaoke", "Anong Karaoke Singer Ka?", "Alamin kung paano ka sa videoke"),
    ("music-hugot", "Gaano Ka Ka-Hugot?", "Alamin kung gaano ka emotional sa music"),
    
    # More Regional & Cultural
    ("kultura-bisita", "Anong Bisita Ka?", "Alamin kung anong tipo ka ng guest"),
    ("kultura-mano", "Paano Ka Sa Mano Po?", "Alamin ang respect culture mo"),
    ("kultura-pasalubong", "Anong Pasalubong Giver Ka?", "Alamin kung paano ka mag-pasalubong"),
    
    # Home & Living
    ("bahay-linis", "Gaano Ka Ka-Organized?", "Alamin kung gaano ka malinis sa bahay"),
    ("bahay-luto", "Anong Home Cook Ka?", "Alamin kung paano ka magluto"),
    ("bahay-decor", "Anong Interior Style Mo?", "Alamin kung paano mo dinedecorate bahay"),
    
    # More Work Scenarios
    ("work-meeting", "Anong Meeting Participant Ka?", "Alamin kung paano ka sa meetings"),
    ("work-email", "Anong Email Sender Ka?", "Alamin kung paano ka mag-email"),
    ("work-deadline", "Paano Ka Sa Deadlines?", "Alamin kung paano ka mag-handle ng deadline"),
    
    # More Student Life
    ("student-attendance", "Anong Student Attendance Mo?", "Alamin kung gaano ka present"),
    ("student-notes", "Anong Note Taker Ka?", "Alamin kung paano ka mag-notes"),
    ("student-group-project", "Anong Groupmate Ka?", "Alamin kung anong tipo ka sa group work"),
    
    # More Love & Relationships
    ("relationship-sweet", "Gaano Ka Ka-Showy?", "Alamin kung gaano ka sweet publicly"),
    ("relationship-clingy", "Gaano Ka Ka-Clingy?", "Sukatin ang clingy level mo"),
    ("relationship-jealous", "Gaano Ka Ka-Selosa/Seloso?", "Alamin kung gaano ka possessive"),
    ("relationship-tampo", "Paano Ka Magtampo?", "Alamin ang tampo style mo"),
    
    # Commute & Travel
    ("travel-byahe", "Anong Byahero Ka?", "Alamin kung paano ka mag-travel"),
    ("travel-tourist", "Anong Tourist Ka?", "Alamin kung anong tipo ka ng traveler"),
    ("travel-province", "Paano Ka Sa Provincial Trips?", "Alamin kung paano ka sa probinsya"),
    
    # More Sports & Hobbies (already created: basketball-ph)
    ("hobbies-reading", "Anong Reader Ka?", "Alamin kung paano ka magbasa"),
    ("hobbies-gaming", "Anong Gamer Ka?", "Alamin kung anong tipo ka ng gamer"),
    ("hobbies-exercise", "Paano Ka Mag-Exercise?", "Alamin ang fitness personality mo"),
    
    # Health & Wellness
    ("kalusugan-gamot", "Paano Ka Sa Sakit?", "Alamin kung paano ka mag-self-medicate"),
    ("kalusugan-diet", "Anong Dieter Ka?", "Alamin kung paano ka sa diet"),
    ("kalusugan-tulog", "Anong Sleeper Ka?", "Alamin ang sleeping personality mo"),
]

def create_test_file(test_id, title, description):
    """Create a test data file with Filipino content"""
    
    # Create directory
    dir_path = f"src/tests-fil/{test_id}"
    os.makedirs(dir_path, exist_ok=True)
    
    # Create data.ts file
    file_content = f"""export const {test_id.replace('-', '')}Data = {{
  id: '{test_id}',
  title: '{title}',
  description: '{description}',
  questions: [
    {{
      id: 1,
      question: 'Tanong 1: Paano ka sa sitwasyon na ito?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Masigasig at aktibo' }},
        {{ type: 'B', text: 'Opsyon B - Balanced approach' }},
        {{ type: 'C', text: 'Opsyon C - Chill lang' }},
        {{ type: 'D', text: 'Opsyon D - Hindi interesado' }}
      ]
    }},
    {{
      id: 2,
      question: 'Tanong 2: Ano ang iyong gagawin?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Full effort' }},
        {{ type: 'B', text: 'Opsyon B - Moderate effort' }},
        {{ type: 'C', text: 'Opsyon C - Minimal effort' }},
        {{ type: 'D', text: 'Opsyon D - No effort' }}
      ]
    }},
    {{
      id: 3,
      question: 'Tanong 3: Gaano kadalas ito?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Palagi!' }},
        {{ type: 'B', text: 'Opsyon B - Madalas' }},
        {{ type: 'C', text: 'Opsyon C - Minsan lang' }},
        {{ type: 'D', text: 'Opsyon D - Hindi kailanman' }}
      ]
    }},
    {{
      id: 4,
      question: 'Tanong 4: Ano ang priority mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Very high priority' }},
        {{ type: 'B', text: 'Opsyon B - Medium priority' }},
        {{ type: 'C', text: 'Opsyon C - Low priority' }},
        {{ type: 'D', text: 'Opsyon D - Not a priority' }}
      ]
    }},
    {{
      id: 5,
      question: 'Tanong 5: Paano ka mag-react?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Aggressive reaction' }},
        {{ type: 'B', text: 'Opsyon B - Moderate reaction' }},
        {{ type: 'C', text: 'Opsyon C - Passive reaction' }},
        {{ type: 'D', text: 'Opsyon D - No reaction' }}
      ]
    }},
    {{
      id: 6,
      question: 'Tanong 6: Ano ang style mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Bold style' }},
        {{ type: 'B', text: 'Opsyon B - Balanced style' }},
        {{ type: 'C', text: 'Opsyon C - Conservative style' }},
        {{ type: 'D', text: 'Opsyon D - No particular style' }}
      ]
    }},
    {{
      id: 7,
      question: 'Tanong 7: Anong approach mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Proactive' }},
        {{ type: 'B', text: 'Opsyon B - Responsive' }},
        {{ type: 'C', text: 'Opsyon C - Reactive' }},
        {{ type: 'D', text: 'Opsyon D - Passive' }}
      ]
    }},
    {{
      id: 8,
      question: 'Tanong 8: Gaano ka committed?',
      options: [
        {{ type: 'A', text: 'Opsyon A - 100% committed' }},
        {{ type: 'B', text: 'Opsyon B - Moderately committed' }},
        {{ type: 'C', text: 'Opsyon C - Slightly committed' }},
        {{ type: 'D', text: 'Opsyon D - Not committed' }}
      ]
    }},
    {{
      id: 9,
      question: 'Tanong 9: Ano ang feeling mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Very positive' }},
        {{ type: 'B', text: 'Opsyon B - Somewhat positive' }},
        {{ type: 'C', text: 'Opsyon C - Neutral' }},
        {{ type: 'D', text: 'Opsyon D - Negative' }}
      ]
    }},
    {{
      id: 10,
      question: 'Tanong 10: Paano ang energy level mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - High energy' }},
        {{ type: 'B', text: 'Opsyon B - Medium energy' }},
        {{ type: 'C', text: 'Opsyon C - Low energy' }},
        {{ type: 'D', text: 'Opsyon D - No energy' }}
      ]
    }},
    {{
      id: 11,
      question: 'Tanong 11: Ano ang involvement mo?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Deeply involved' }},
        {{ type: 'B', text: 'Opsyon B - Moderately involved' }},
        {{ type: 'C', text: 'Opsyon C - Slightly involved' }},
        {{ type: 'D', text: 'Opsyon D - Not involved' }}
      ]
    }},
    {{
      id: 12,
      question: 'Tanong 12: Overall, paano ka?',
      options: [
        {{ type: 'A', text: 'Opsyon A - Expert level' }},
        {{ type: 'B', text: 'Opsyon B - Intermediate level' }},
        {{ type: 'C', text: 'Opsyon C - Beginner level' }},
        {{ type: 'D', text: 'Opsyon D - Newbie level' }}
      ]
    }}
  ],
  results: {{
    A: {{
      title: 'Ang Masigasig',
      description: 'Ikaw ay napaka-active at passionate sa lahat! Full energy ka at committed sa bawat bagay na ginagawa mo. Expert level ang approach mo!'
    }},
    B: {{
      title: 'Ang Balanse',
      description: 'Balanced ka sa lahat! Hindi OA pero hindi rin kulang. Tama lang ang effort at involvement mo. Steady and reliable ka!'
    }},
    C: {{
      title: 'Ang Chill',
      description: 'Relaxed ka at chill lang sa buhay! Hindi mo priority ang stress at pressure. Gusto mo ng simple at tahimik na buhay!'
    }},
    D: {{
      title: 'Ang Deadma',
      description: 'Hindi ka masyadong involved o interested. May ibang priority ka sa buhay at okay lang yan! Focus ka sa kung ano talaga importante sayo!'
    }}
  }},
  calculateResult: (answers: string[]) => {{
    const counts = {{ A: 0, B: 0, C: 0, D: 0 }};
    answers.forEach(answer => counts[answer as keyof typeof counts]++);
    const max = Math.max(counts.A, counts.B, counts.C, counts.D);
    if (counts.A === max) return 'A';
    if (counts.B === max) return 'B';
    if (counts.C === max) return 'C';
    return 'D';
  }}
}};
"""
    
    file_path = os.path.join(dir_path, "data.ts")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(file_content)
    
    print(f"Created: {test_id}")

# Generate all tests
for test_id, title, description in tests:
    create_test_file(test_id, title, description)

print(f"\n✅ Successfully created {len(tests)} Filipino test files!")
