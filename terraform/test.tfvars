environment          = "test"
component_name       = "administration-portal"

task_cpu             = 256
task_memory          = 512
port                 = 3000

service_desired_count   = "2"

alb_deregistration_delay = 15