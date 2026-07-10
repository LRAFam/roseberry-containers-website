<template>
  <component :is="icon" :class="[sizeClass, attrs.class]" aria-hidden="true" />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import {
  ArrowRightOnRectangleIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ChartPieIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentTextIcon,
  EyeIcon,
  GlobeAltIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PhoneIcon,
  PlusIcon,
  TrashIcon,
  TruckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import type { AdminIconName } from '~/utils/admin-icons'

const props = withDefaults(defineProps<{
  name: AdminIconName
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md',
})

const attrs = useAttrs()

const sizeClass = computed(() => ({
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}[props.size]))

const icons: Record<AdminIconName, object> = {
  'chart-bar': ChartBarIcon,
  'chart-pie': ChartPieIcon,
  newspaper: NewspaperIcon,
  cog: Cog6ToothIcon,
  globe: GlobeAltIcon,
  users: UserGroupIcon,
  building: BuildingOffice2Icon,
  cube: CubeIcon,
  clock: ClockIcon,
  truck: TruckIcon,
  document: DocumentTextIcon,
  phone: PhoneIcon,
  logout: ArrowRightOnRectangleIcon,
  plus: PlusIcon,
  'x-mark': XMarkIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  pencil: PencilSquareIcon,
  eye: EyeIcon,
  trash: TrashIcon,
  check: CheckIcon,
}

const icon = computed(() => icons[props.name])
</script>
