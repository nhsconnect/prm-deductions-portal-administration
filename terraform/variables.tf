variable "region" {
  type    = string
  default = "eu-west-2"
}

variable "environment" {}

variable "component_name" {}
variable "dns_name" {}

variable "task_image_name" {}
variable "task_image_tag" {}
variable "task_cpu" {}
variable "task_memory" {}
variable "port" {}

variable "service_desired_count" {}

variable "alb_deregistration_delay" {}
