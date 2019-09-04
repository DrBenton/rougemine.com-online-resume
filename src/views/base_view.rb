require 'erb'

require 'concerns/project_path_aware'
require 'data_bucket'

module Rougemine
    class BaseView
        include ProjectPathAware
        
        def get_html
            rhtml = ERB.new(template)
            rhtml.result(get_binding)
            # "#{self.class} - #{@html_template}" + rhtml.result(get_binding)
        end

        def data
            DataBucket.instance
        end
        
        private

        def get_binding
            binding
        end

        def template
            template_path = File.join(html_path, "#{html_template_name}.html.erb")
            File.read(template_path)
        end

        def self.set_html_template_name(html_template)
            define_method :html_template_name do
                html_template
              end
        end

        def html_template_name
            raise "`set_html_template_name` class method must be called on subclasses of BaseView, but it wasn't on #{self.class}"
        end
    end
end
