import { createRouter, createWebHistory } from 'vue-router'
import { titleManager } from '@/utils/titleManager.js'

// Auth views
import LoginView from '@/views/auth/LoginView.vue'
import ExpertRegisterView from '@/views/auth/ExpertRegisterView.vue'
import ParentRegisterView from '@/views/auth/ParentRegisterView.vue'
import CuratorRegisterView from '@/views/auth/CuratorRegisterView.vue'
import EmailConfirmationView from '@/views/auth/EmailConfirmationView.vue'

// Parent views
import ParentDashboard from '@/views/parent/ParentDashboard.vue'
import ParentDashboardHome from '@/views/parent/ParentDashboardHome.vue'
import ParentCompetenciesSelection from '@/views/parent/ParentCompetenciesSelection.vue'
import ParentMyCompetencies from '@/views/parent/ParentMyCompetencies.vue'
import ParentAchievements from '@/views/parent/ParentAchievements.vue'

// Mentor views (бывшие Expert)
import MentorDashboard from '@/views/mentors/MentorDashboard.vue'
import MentorDashboardHome from '@/views/mentors/MentorDashboardHome.vue'
import MentorParticipants from '@/views/mentors/MentorParticipants.vue'
import MentorMyCertificates from '@/views/mentors/MentorMyCertificates.vue'
import MentorParticipantsCertificates from '@/views/mentors/MentorParticipantsCertificates.vue'

// Expert views (новые эксперты)
import ExpertDashboard from '@/views/expert/ExpertDashboard.vue'
import ExpertDashboardHome from '@/views/expert/ExpertDashboardHome.vue'
import ExpertCompetencies from '@/views/expert/ExpertCompetencies.vue'
import ExpertParticipants from '@/views/expert/ExpertParticipants.vue'
import ExpertDocuments from '@/views/expert/ExpertDocuments.vue'
import ExpertEvents from '@/views/expert/ExpertEvents.vue'

// Curator views
import CuratorDashboard from '@/views/curator/CuratorDashboard.vue'
import CuratorDashboardHome from '@/views/curator/CuratorDashboardHome.vue'
import CuratorExperts from '@/views/curator/CuratorExperts.vue'
import CuratorDocuments from '@/views/curator/CuratorDocuments.vue'
import CuratorVenueInfo from '@/views/curator/CuratorVenueInfo.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: ExpertRegisterView
  },
  {
    path: '/register/expert',
    name: 'expert-register',
    component: ExpertRegisterView
  },
  {
    path: '/register/parent',
    name: 'parent-register',
    component: ParentRegisterView
  },
  {
    path: '/register/curator',
    name: 'curator-register',
    component: CuratorRegisterView
  },
  {
    path: '/email-confirmation',
    name: 'email-confirmation',
    component: EmailConfirmationView
  },
  {
    path: '/parent',
    component: ParentDashboard,
    children: [
      {
        path: '',
        redirect: '/parent/dashboard'
      },
      {
        path: 'dashboard',
        name: 'parent-dashboard',
        component: ParentDashboardHome
      },
      {
        path: 'competencies',
        name: 'parent-competencies',
        component: ParentCompetenciesSelection
      },
      {
        path: 'my-competencies',
        name: 'parent-my-competencies',
        component: ParentMyCompetencies
      },
      {
        path: 'achievements',
        name: 'parent-achievements',
        component: ParentAchievements
      }
    ]
  },
  {
    path: '/mentor',
    component: MentorDashboard,
    children: [
      {
        path: '',
        redirect: '/mentor/dashboard'
      },
      {
        path: 'dashboard',
        name: 'mentor-dashboard',
        component: MentorDashboardHome
      },
      {
        path: 'participants',
        name: 'mentor-participants',
        component: MentorParticipants
      },
      {
        path: 'my-certificates',
        name: 'mentor-my-certificates',
        component: MentorMyCertificates
      },
      {
        path: 'participants-certificates',
        name: 'mentor-participants-certificates',
        component: MentorParticipantsCertificates
      }
    ]
  },
  {
    path: '/expert',
    component: ExpertDashboard,
    children: [
      {
        path: '',
        redirect: '/expert/dashboard'
      },
      {
        path: 'dashboard',
        name: 'expert-dashboard',
        component: ExpertDashboardHome
      },
      {
        path: 'competencies',
        name: 'expert-competencies',
        component: ExpertCompetencies
      },
      {
        path: 'participants/:competencyId',
        name: 'expert-participants',
        component: ExpertParticipants
      },
      {
        path: 'documents/:competencyId',
        name: 'expert-documents',
        component: ExpertDocuments
      },
      {
        path: 'events',
        name: 'expert-events',
        component: ExpertEvents
      }
    ]
  },
  {
    path: '/curator',
    component: CuratorDashboard,
    children: [
      {
        path: '',
        redirect: '/curator/dashboard'
      },
      {
        path: 'dashboard',
        name: 'curator-dashboard',
        component: CuratorDashboardHome
      },
      {
        path: 'experts',
        name: 'curator-experts',
        component: CuratorExperts
      },
      {
        path: 'documents',
        name: 'curator-documents',
        component: CuratorDocuments
      },
      {
        path: 'venue-info',
        name: 'curator-venue-info',
        component: CuratorVenueInfo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Обновляем title при переходах между страницами
router.afterEach((to) => {
  const pageTitle = titleManager.getPageTitle(to.name)
  titleManager.setTitle(pageTitle)
})

export default router
